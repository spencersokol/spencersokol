---
title: EARPS
slug: earps
description: A fully custom Wordpress site that includes a custom Vue.js component to view adoptable animals.
date: 01-01-2020
---
EARPS is an exotic animal rescue, and Heather &amp; I are on the board. They have a network of volunteers and foster homes that work to educate the public on the proper care of exotic pets. They also work to help control the pet population through spaying and neutering adoptable animals whenever possible.

It is an all volunteer rescue, and they needed a website that is easy for multiple people to help manage. That's where Wordpress comes in. I built a custom theme and Heather manages most of the content.

![EARPS](/assets/earps.webp)

The site contains a custom Vue.js component that allows visitors to filter through all of adoptable animals available from the rescue. The data is pulled from daily from the PetFinder API via a scheduled job, so visitors can always see what animals are still looking for their forever home.

![EARPS Vue.js PetFinder component](/assets/earps-petfinder.webp)

The site allows users to choose the species, age, and sex of available animals, and shows them relevant information such as whether or not the animal requires special care and handling.