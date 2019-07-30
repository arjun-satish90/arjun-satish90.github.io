---
published: true
title: "Python and Slack: A Natural Match"
date: 2018-12-01
categories:
  - Python
  - programming
---

![](https://miro.medium.com/max/2000/1*uLuuOyH3ni5eUjntOwsmbA.jpeg?q=20)
*([Source](https://www.pexels.com/photo/light-landscape-nature-red-33041/))*

## How to send Slack messages, post plots, and monitor machine learning models programmatically with Python

Life opens up when you learn just how much you can do with Python. The first shift in my daily workflows came when I read sheets — that I no longer had to waste hours on. Instead, I could spend a few minutes [writing a Python program](/python-is-the-perfect-tool-for-any-problem-f2ba42889a85) (okay maybe a few hours at first), run the script, and then sit back to watch the tedious work do itself.

A second shift occurred when I realized that nearly any service with an API — thedocs.io/en/latest/)), Twitter (thedocs.io/en/latest/)), Wikipedia ([Wikipedia API](https://pypi.org/project/wikipedia/) ), and Slack ([Slacker](https://github.com/os/slacker) for Python), can be accomplished through Python code.

> This means you’re not constrained to interacting with these services in an app, but instead, can write code to automate complex workflows or build new tools.

In this article, we’ll see how to use the [Slacker Python library](https://github.com/os/slacker) to programmatically interact with Slack. We’ll be able to retrieve any data from a workspace, alter settings for channels and users, post messages, upload files, create applications, and even monitor machine learning results in real time. The complete code is available as a [Jupyter Notebook on GitHub](https://github.com/WillKoehrsen/Data-Analysis/blob/master/slack_interaction/Interacting%20with%20Slack.ipynb).

![](https://miro.medium.com/max/2000/1*DSAlqR-xpqBOz0hAt6Bbng.png?q=20)
*Real-time monitoring of machine learning in Slack.*

<!--more-->

* * *

# Introduction to Slacker

[Slacker](https://github.com/os/slacker) is a Python interface to the Slack API. It wraps the [Slack API](https://api.slack.com/) service (fully supported by Slack) and allows us to write Python code instead of formatting requests to the API ourselves. This means far less time to construct queries and easier interaction with Slack. The [Slack API methods docs](https://api.slack.com/methods) are very helpful when using the Slacker library (which has relatively scant documentation). No matter what you want to do in Slack, you can do it through this library as long as you’re willing to do a little searching!

## Getting Started

First off, you need to create a [Slack workspace](https://slack.com/). I’ll assume if you’re confident writing Python code, you can handle this step by yourself. I’d recommend making a new workspace where you’re the admin for testing out interactions. The next step is to get a legacy API token. If you’re signed into the workspace, head to [this link](https://api.slack.com/custom-integrations/legacy-tokens). Make sure to keep your token in a safe location!

![](https://miro.medium.com/max/2000/1*9RSFkWPmCORUVKQkFk0P2Q.png?q=20)
*Authenticate with Slacker using your API token as follows:*

```
from slacker import Slacker# Authenticate with slacker
slack = Slacker(slack_api_token)
```

Check that you’re connected by printing out the name of the workspace:

```
# Check for success
if slack.api.test().successful:
    print(
        f"Connected to {slack.team.info().body['team']['name']}.")
else:
    print('Try Again!') **Connected to Data Analysis.**
```

# Interacting with Slack

Anything (okay _nearly_ anything) you can do in slack you can do through the Python interface to the API. (Check out the [complete list of methods here](https://api.slack.com/methods)). For example, here’s everything we can do with channels:

![](https://miro.medium.com/max/2000/1*DG3QU8tkTIusVVjidC6fyg.png?q=20)

## Information Retrieval

Let’s start off with some simple data retrieval. Each time we use a different function in `Slacker` , we get back a _response_ object where the `body` holds the results (if the request was successful). There’s quite a lot of different information we can retrieve. For example, here’s the channels and purposes:

```
# Make a request to get the channels
r = slack.channels.list()
channels = r.body_# Iterate through channels_
for c in channels['channels']:
    print(f'Channel {c["name"]} Purpose: {c["purpose"]["value"]}')

Channel general Purpose: This channel is for workspace-wide communication and announcements. All members are in this channel.

Channel python_content Purpose: Data Science and Python

Channel random Purpose: Deep philosophical discussions****Channel testing_exp Purpose: Experimental testing of interactions.
```

If we want to check out the users (members), here’s the code and result:

```
from IPython.display import Image# Find all users
users = slack.users.list().bodyfor u in users['members']:
    _# Print some information_
    print(f'User: {u["name"]}, Real Name: {u["real_name"]},
            Time Zone: {u["tz_label"]}.')
    print(f'Current Status: {u["profile"]["status_text"]}')

    _# Get image data and show_
    Image(user['profile']['image_192'])
```

![](https://miro.medium.com/max/2000/1*6809Llp3KswjL-OeCN_AWA.png?q=20)
*Users in our workspace*

It’s pretty lonely in this workspace! We can search through channels for files or messages, see a channel’s history, and even look at do not disturb settings:

![](https://miro.medium.com/max/2000/1*3S5K6_deiHcCS-S0R4YBaw.png?q=20)
*(The user is this case is referred to by id. We can find the user id for a username with `slack.users.get_user_id(username)`).*

## Changing Settings and Attributes

Not only can we find any information we want, we can also change attributes. Maybe I want to tell my team to leave me alone:

```
# Set do not disturb for 2 hours
slack.dnd.set_snooze(num_minutes=120)
```

I can also alter my profile settings:

```
slack.users.profile.set(user = 'wjk68', name = 'status_text',
                        value = 'Writing some code')
slack.users.profile.set(user = 'wjk68', name = 'status_emoji',
                        value = ':male-technologist')
```

![](https://miro.medium.com/max/2000/1*fYvzhuuTLBFk_rP4HUeSBw.png?q=20)

On the topic of emoji, you can use [emoji codes](https://www.webpagefx.com/tools/emoji-cheat-sheet/) to specify which icon you want. The easiest way to pick these out is to go to Slack, search for the emoji you want, and copy the code that appears:

![](https://miro.medium.com/max/2000/1*TPorqQS_E5tEfKUMekaxzQ.png?q=20)
*Searching for an emoji code.*

Want to create a new channel and set the purpose? Two lines of python code:

```
# Create a new channel and set purpose
slack.channels.create('python_content_new')
slack.channels.set_purpose('python_content_new', 'Data Science and Python')
```

# Posting Messages

Of course we don’t just want to be passive consumers of information. We want to talk to the world! Fortunately, `Slacker` lets us easily post to any channel:

```
# Post a message
slack.chat.post_message(channel='python_content',
                            text='Have a great day!',
                            username='Python Test',
                            icon_url='http://devarea.com/wp-content/uploads/2017/11/python-300x300.png')
```

![](https://miro.medium.com/max/2000/1*zCkiw0CqzE6Ul-kQXM3Orw.png?q=20)

If we set the `username` then the messages are posted as bots. We can choose the icon by specifying a url or an emoji. We can also mention specific users with `<@user_id>` or commit the ultimate sin and notify everyone:

```
slack.chat.post_message(channel='python_content',
                            text='<!everyone> *This is not atest!*',
                            username='Alert',
                            icon_emoji=':female-firefighter:')
```

![](https://miro.medium.com/max/2000/1*YQ_-EMp2eWF65DD1PkpW4g.png?q=20)

Messages can be as complex as we want. Using attachments, we can format messages or even create games! Refer to the [Slack API documentation on formatting messages](https://api.slack.com/docs/message-attachments) for all the options.

![](https://miro.medium.com/max/2000/1*4FojC-8oXI1YVCrmqd50Rg.png?q=20)
*Message formatting*

![](https://miro.medium.com/max/2000/1*Q35rkrLGfn9ljXt6ipDC2w.png?q=20)
*App created via a message*

You can build [complex application workflows with interactive messages](https://api.slack.com/interactive-messages#building_workflows).

## Uploading Files

Uploading local files is another one-liner:

```
slack.files.upload(file_='images/volcano_crater.jpg',
                   channels=['random'], title='Volcano Crater',
                   initial_comment='This would make a great
                                    display background')
```

![](https://miro.medium.com/max/2000/1*18Oq_PdEEW56xM27W6QobA.png?q=20)
*Uploaded files.*

If we’ve done some cool analysis and want to share the plots with the team, we save the figures and upload:

![](https://miro.medium.com/max/2000/1*xn4SbHFQljvPoWNWlLWqjw.png?q=20)

We can also remove files or messages, add comments, create private chats, invite users, set reminders, and more with the API.

* * *

# Monitor Machine Learning Training

Alright, time to get serious and user Slack for some real work. Here we’ll send messages to monitor the progress of a convolutional neural network (CNN) as it is training. I’m using a [script from Keras](https://github.com/keras-team/keras/blob/master/examples/mnist_cnn.py) to train a CNN to recognize MNIST digits. With custom [callbacks in Keras](https://keras.io/callbacks/), we can send a message to Slack at the end of every epoch with the current stats. S[ee notebook for full code](http://nbviewer.jupyter.org/github/WillKoehrsen/Data-Analysis/blob/master/slack_interaction/Interacting%20with%20Slack.ipynb), but the basic outline is below (this is pseudo-code and won’t quite run):

<script src="https://gist.github.com/WillKoehrsen/e13a2717695fbed5c4368f072e095f56.js"></script>

Now we get real -time deep learning updates in Slack!

![](https://miro.medium.com/max/2000/1*Id90bRTF3N6BFsDWGbNX6w.png?q=20)
At the end of training, we can create some training curves and post those:

![](https://miro.medium.com/max/2000/1*YT-LMCX6EatyW7QeEALyWg.png?q=20)

## Post Predictions

Finally, once our model has trained, we can post predictions from the test set:

![](https://miro.medium.com/max/2000/1*pgX794Sy3Jk9WhIT9xQsNw.png?q=20)
*Predictions from convolutional neural network on test set.*

This model does pretty well! For this simple example, the monitoring might not be necessary, but there are many use cases for tracking a model or posting [continuous integration results](https://www.fullstackpython.com/continuous-integration.html). I’ve run models overnight and when I don’t want to head to the command window to check out the progress, it’s useful to just look at Slack instead.

> Writing tools that automatically post to Slack or notify you when something needs your attention let you shift focus to more important matters. Ultimately, programmatic workflows result in less time and energy spent on tedious tasks.

![](https://miro.medium.com/max/2000/1*0AK_Q6UZXa5VJ-IXvcSqkw.png?q=20)
*Reduce the amount of tedium in your life with Python! [(Book available for free)](https://automatetheboringstuff.com/).*

* * *

# Conclusions

While apps such as Slack can be used for fun, they also improve productivity when used correctly. Furthermore, if we realize these apps have Python access to their APIs, we can programmatically control them for great efficiency.

In this article we saw how to interact with Slack through the `Slacker` library in Python. This library gives us access to the Slack API which means we have control over nearly every aspect of our workspace. Among other things we can

*   Retrieve channel, message, and user information
*   Alter and manage user, channel, and team settings
*   Post messages including applications
*   Track the progress of and plot results from machine learning

If Slack isn’t your favorite application (although it should replace your email), check out the [list of Python API interfaces](https://github.com/realpython/list-of-python-api-wrappers). Even if this particular use case is not compelling to you, the idea that we can use Python to complete routine tasks is a powerful one because it enables us to be more efficient.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will](http://twitter.com/@koehrsen_will) or through my personal website [willk.online](https://willk.online/).
