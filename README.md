# Somebody Bring Me Some Ham!

When Liz Lemon became the star of her very own talk show, she became obsessed with how the world sees her. Going to far as to having a procedure that made her cry out of her mouth. So, `http://localhost:4200/` will be the address for the app when you run it.

This is a simple web app that lets you add people to visually represent how the web "sees them." The scope got cut back mainly due to Twitter taking forever to answer a request for API access. So, it leans on a not-always-great Google Knowledge Graph API along with the Giphy API.

Make sure to have both the main rails server going in the root along with a frontend angular server going in `/frontend`.

Also, for obvious reasons, I'll have to revoke access to the API keys in https://github.com/schwegler/ham/blob/master/frontend/src/environments/environment.ts after a while so Google doesn't ask for lots of money.

https://www.youtube.com/watch?v=20FAAZnKFH4

# Backend

## Reqs

Ruby 2.5.0, Rails 5.2.2

Then, `bundle install` that good good Gemfile sauce.

# Database

This uses postgres, so have that going. A `rake db:create` and `rake db:migrate` followed by a `rake db:seed` will get things started.

# Run it.

A simple Rails s should suffice.

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

An NPM install should get things up and running.
Then, run `ng serve` for a dev frontend server. It will be available on `http://localhost:4200/`.
