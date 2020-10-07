---
layout: post
title:  "Continuous Integration With Azure DevOps — Part 1"
author: sal
categories: [ Devops ]
image: assets/images/devops1.jpeg
---



Most of us would be familiar with the term [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) and that too most of us Android Developer’s would have tried [Jenkin’s](https://en.wikipedia.org/wiki/Jenkins_(software)) or any other CI tools in our daily development . I just thought of trying my hand at Azure devOps in one of my test project’s to get the hang of it . And Boy, there were fewer resources to learn more about it apart from the official documentation and I had a hard time figuring it out how to do. This forced me to write about this topic .


<img alt="Image for post"  src="{{site.baseurl}}/assets/images/devops2.jpeg"/>

Photo by [Nick Fewings](https://unsplash.com/@jannerboy62?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

Blah blah , Now get to the point . :D.

Hope you guy’s have a Microsoft Account in place . My organisation is tied to Microsoft (vendor locked :P )and we have access to most of the Microsoft tools as well.

You might have seen the menu Azure Pipelines in devOp’s page right ? For people who have been wondering what that is .

Azure pipelines is just another cloud service which makes us to build (CI)and test and make it available to other users (CD). Azure pipelines makes use of [YAML](https://yaml.org/) file (Used as a configuration file) to configure the step’s/Job’s involved . You can go through the YAML [schema](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema) to get the hang of it . Usually the pipeline is named as “azure-pipelines.yml” and is located at the root of your repo .

A basic azure-pipelines.yml file somewhat looks like this

```
**trigger:  
  batch:** true  
  **tags:  
    include:** \- v\*  
  **branches:  
    include:** \- releases/\*  
  
**pool:  
  vmImage:** 'Ubuntu-16.04'  
  
**steps:  
**\- **task:** Gradle@2  
  **inputs:  
    workingDirectory:** ''  
    **gradleWrapperFile:** 'gradlew'  
    **publishJUnitResults:** false  
    **tasks:** 'assembleDebug'  
  
_#- task: Gradle@2  
\#  inputs:  
\#    workingDirectory: ''  
\#    gradleWrapperFile: 'gradlew'  
\#    publishJUnitResults: false  
\#    tasks: 'assembleRelease'  
  
_\- **task:** CopyFiles@2  
  **inputs:  
    contents:** '\*\*/\*.apk'  
    **targetFolder:** '$(build.artifactStagingDirectory)'  
  
\- **task:** PublishBuildArtifacts@1  
  **inputs:  
    pathToPublish:** '$(build.artifactStagingDirectory)/app/build/outputs/'  
    **artifactName:** 'apk-files'  
    **artifactType:** 'container'
```

Don’t worry , I will explain each part of the yml

**Trigger**

CI trigger’s cause a build to run when a push is made to a certain branch or a when a certain tag is pushed .

```
**trigger:  
  batch:** true  
  **tags:  
    include:** \- v\*  
  **branches:  
    include:** \- releases/\*
```

You can either specify a wildcard or the full name of the branch/tag . The particular code makes the CI build run when the tag which starts with the letter v is pushed or when a branch starting with releases gets created (when a commit is pushed to the release branch ). Also instructed the build to get triggered .

**Pool**

```
**pool**:  
  **vmImage**: 'Ubuntu-16.04'
```

Here you can specify the OS against which need to build the project . You can choose either linux / Mac or windows . Me being a linux guy and supporter of the open source projects, choose ubuntu as my driver.

If you want to run on a mac then you can use specify like this

```
pool:  
  vmImage: 'macOS 10.13'
```

If you don’t want to specify an OS version , then you could use latest version of the OS by specifying like

```
**pool**:  
**vmImage**: 'macOS-latest'
```

**Steps**

```
**steps**:  
\- **task**: Gradle@2  
  **inputs**:  
    **workingDirectory**: ''  
    **gradleWrapperFile**: 'gradlew'  
    **publishJUnitResults**: false  
    **tasks**: 'assembleDebug'  
  
_#- task: Gradle@2  
\#  inputs:  
\#    workingDirectory: ''  
\#    gradleWrapperFile: 'gradlew'  
\#    publishJUnitResults: false  
\#    tasks: 'assembleRelease'  
  
_\- **task**: CopyFiles@2  
  **inputs**:  
    **contents**: '\*\*/\*.apk'  
    **targetFolder**: '$(build.artifactStagingDirectory)'  
  
\- **task**: PublishBuildArtifacts@1  
  **inputs**:  
    **pathToPublish**: '$(build.artifactStagingDirectory)/app/build/outputs/'  
    **artifactName**: 'apk-files'  
    **artifactType**: 'container'
```

This is where all the action takes place . You can run various tasks here . The above code build’s and get’s the debug apk ,copies the apk to a specified folder and publish the artifact

If you want to get the release build , you could also do that .

```
steps:  
\- task: Gradle@2  
  inputs:  
    workingDirectory: ''  
    gradleWrapperFile: 'gradlew'  
    gradleOptions: '-Xmx3072m'  
    publishJUnitResults: false  
    testResultsFiles: '\*\*/TEST-\*.xml'  
    tasks: 'assembleRelease'  
  
\- task: DownloadSecureFile@1  
  inputs:  
    secureFile: 'calcubaker.jks'  
  
\- task: AndroidSigning@3  
  inputs:  
    apkFiles: '\*\*/\*.apk'  
    apksignerKeystoreFile: 'calcubaker.jks'  
    apksignerKeystorePassword: '$(keystorePassword)'  
    apksignerKeystoreAlias: '$(keyAlias)'  
    apksignerKeyPassword: '$(keyPassword)'  
    zipalign: false
```

You could upload the keystore to secure files and get it from there . More info [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/secure-files?view=azure-devops) . (Will cover that in another article)

If you want to connect to google play, you can do with the google play [extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play). You can connect it to the app center as well . ( May be in part 2 :P )

So all you guy’s need to do is include the azure-pipelines.yml in the root of your project and push to the repo . You will see that the build automatically getting triggered on your commit ( My configuration run’s on release branch or whenever there is a tag)
