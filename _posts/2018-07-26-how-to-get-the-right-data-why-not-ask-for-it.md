---
published: true
title: "How To Get The Right Data Why Not Ask For It"
date: 2018-07-26
categories:
  - data
  - learning
---

![](https://miro.medium.com/max/2000/1*dJEL2yaz_V0w9oTU-muxNQ.jpeg?q=20)

## An example of why the most important skills in data science may not be technical

While the technical skills of data science — think modeling with a gradient boosting machine — get most of the attention, other equally important, general-purpose problem-solving abilities can be overlooked. Proficiency in asking the right question, being persistent, and taking advantage of multiple resources are critical to the success of a data science project but often take a back seat to coding ability when people ask what it takes to be a data scientist.

Recently, I was reminded of the importance of these non-technical skills while working on a data science for good project. [The project, currently live on Kaggle](https://www.kaggle.com/passnyc/data-science-for-good?#D5%20SHSAT%20Registrations%20and%20Testers.csv) involves identifying schools in New York City that would most benefit from programs that encourage disadvantaged students to take the [Specialized High Schools Admission Test (SHSAT)](https://www.nytimes.com/2018/06/21/nyregion/what-is-the-shsat-exam-and-why-does-it-matter.html?). This task comes with a small data set including test results from 2016, but the organizers encourage the use of any publicly available data.

![](https://miro.medium.com/max/2000/1*vM0Y4zfTY7TA8xK-LxA1bw.png?q=20)
*Data Science is for more than just getting people to click on ads [(Get Started Here)](https://www.kaggle.com/passnyc/data-science-for-good/home?)*

<!--more-->

Knowing that the success of a data science project is [proportional to the quality and quantity of the data](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35179.pdf?), I set out to find newer test results. Not surprisingly with the vast resources now at our fingertips, I was ultimately successful, and along the way I learned a few lessons about the “other” proficiencies necessary for data science that I’ve laid out below.

* * *

## Step One: Ask the Right Question(s) / Have the Right Goal

The broad availability of resources can be both a blessing and a curse: with so many options, sometimes it can be difficult to find a place to start (a phenomenon I see often when people want to learn data science). The right question or goal can help you narrow down the options.

If I asked “Is there any New York City data I can use?” I would have been overwhelmed with the possibilities, much as people who “want to learn Python” are confronted with a dizzying array of resources (a better objective is “I want to learn Python _for x_” because it will limit the choices).

If you don’t succeed in your initial objective, you can always cast a wider net or change the question / goal. Moreover, sometimes you can answer your initial question with a different set of data than you had in mind or you might find out there was a better question to ask. Keeping this in mind, I set out my search with one question: could I find the most recent results for the SHSAT?

## Step Two: Explore the Resources

With my single focused question, the best place to start was the [New York City Open Data Portal](https://data.cityofnewyork.us/browse?category=Education&). NYC, like many large cities, has an extensive collection of data free to download and use in your projects. [Open data portals](https://www.opendatasoft.com/a-comprehensive-list-of-all-open-data-portals-around-the-world/?) are a great place to start for exploring issues and using data science to make an impact.

Unfortunately, although the NYC data was extensive, none of it covered the SHSAT. So I broadened my search — meaning that I went further down the list of Google results — and came across an article by the [New York Times analyzing exactly the data I wanted](https://nyti.ms/2KzvfOn?) (with some great infographics)!

![](https://miro.medium.com/max/2000/1*dt-8SvO6yXKWqiTmycTuRw.png?q=20)
*One of several interactive maps in [the article](https://nyti.ms/2KzvfOn?)*

## Step 3: Reach Out

Clearly the data was publicly available somewhere if the NYT could get it! Since I had already checked the open data portal, I decided to try a more direct route and contact the author. I’ve had success with this method before — I once scored a free college textbook that was out of print by emailing the author — and now it’s simple to find a social media or professional contact address. As long as your request is civil (a compliment or two doesn’t hurt) most authors are more than willing to help if they can.

However, in this case my direct approach failed as the author didn’t respond on any the channels I used. To be honest, I don’t blame her: it can be tough dealing with all the requests you get as a writer, and I would much rather she concentrate on writing more articles than reply to every single comment!

## Step 4: Be Persistent

One of the most important parts of being a data scientist is the ability to pay attention to details. Valuable information can hide in unexpected places (such as file names) and in this case, reading the fine print under the infographic revealed the source: the NYC Department of Education, which I had already searched through the open data portal!

![](https://miro.medium.com/max/2000/1*ZOJB7eaxB5mvm9ZLJ0TJKA.png?q=20)
*Always read the details*

While I had already tried this source, I went back to the portal and decided to make a [request from the contact page](https://opendata.cityofnewyork.us/engage/?). I submitted a ticket with the specific data I wanted and received the slightly discouraging note it could take up to 2 weeks to hear a reply. Fortunately, that seems to be a pessimistic overestimate and within 2 days I had a response back — from an actual human! — that the data I had requested was available. That same day, [the full data](https://data.cityofnewyork.us/Education/2017-2018-SHSAT-Admissions-Test-Offers-By-Sending-/vsgi-eeb5/?) appeared in the NYC data portal, free for the world to use to the benefit of NYC students. There was no barrier to making the data public, someone **just had to ask!**

## Step 5: Share it forward

Although this project is technically a competition on Kaggle, there was no way I was going to keep the availability of this data a secret. I immediately set up a discussion thread and shared the link to the data source. Within hours, other data scientists were using this data for their own analysis and then sharing their findings. That’s what’s great about the data science community: it’s not about competing, but about learning from each other.

One person can only have so much experience but the collective knowledge of a community can be vast. This means that when you find something interesting, don’t keep it to yourself but rather share it so others can learn as well! Having received so much from other data scientists on Kaggle, it felt great to be able to give a little back.

* * *

This small example illustrates a few key points: first,it never hurts to ask! [I’ve written about this before](https://medium.com/@williamkoehrsen/the-worst-they-can-say-is-no-212a1c571aad?), but when you ask someone for a favor (as long as the request is reasonable) the worst they can say is no. Second, the ability to use multiple resources and stay persistent will take you farther than any particular technical skill in your career. None of the steps I took involved any coding, but without going through with them, I wouldn’t have gotten the data I needed to do an analysis! Finally, don’t be afraid to reach out to people for help or to use any of the great resources now available to us.

As always, I welcome comments, constructive criticism, and discussion. I can be reached on Twitter [@koehrsen_will](http://twitter.com/koehrsen_will?)
