---
title: LCCA eTrak
slug: etrak
description: A fully custom clean architecture project in C# for a collectible model train marketplace.
date: 10-01-2022
---
![LCCA eTrak](https://spencersokol.com/assets/etrak.webp#right)
The [Lionel Collectors Club of America](https://www.lionelcollectors.org/) run a marketplace for collectible model trains, known as eTrak. The system grew from their newsletter trade, and needed to be modernized for future functionality and ease of use. They had access to their existing database, but the codebase could not be retrieved, so the new system needed to be built from the ground up with all of the existing functionality.

To do this, we leveraged .Net and Entity Framework with clean architecture. Along with their subject matter experts, we were able to reverse engineer their business needs and build an appropriately layered system. The core is their domain models and services, which implements all the necessary busines logic for the marketplace. A database first approach was used with Entity Framework to implement the needed repository logic, and an API layer with thin controllers rounded out the backend. Dependency injection and data mapping tools kept the coupling between the layers low and allows for future infrastructure changes without the need to rewrite the entire system.

The user interface was left in a minimal state, but leverages the Vue.js component architecture and state management, which will allow the client to easily update the front-end in the future when their priorities allow.