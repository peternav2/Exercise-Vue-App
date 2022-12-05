<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{name: 'Home'}" class="button has-background-success-light"> Home </router-link>
          <router-link :to="{name: 'YourPosts'}" class=" button has-background-success-light"> Your Posts </router-link>
          <router-link :to="{name: 'WorkoutWeek'}" class=" button has-background-success-light"> Week Workout </router-link>
          <router-link :to="{name: 'WorkoutDay'}" class=" button has-background-success-light"> All Workouts </router-link>
          <router-link :to="{name: 'Workouts'}" class=" button has-background-success-light"> Workouts </router-link>


        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link :to="{name: 'Login'}" class="button is-light"> Log in </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>