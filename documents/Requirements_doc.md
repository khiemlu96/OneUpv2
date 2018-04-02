## 5.0 Requirements Specification

### 5.1 Introduction

This is the Software Requirements Specification (SRS) document that details the low-level system requirements for OneUp. OneUp is a web application that aims to expose young skateboard talent through crowdsourced curation. It is essentially a video database of user uploaded skate clips that will be curated by upvotes/downvotes from other users. The clips will be filtered by time of upload (weeks and all-time) with the most upvoted videos at the top of the list. Each users will have his or her own profile displaying uploaded and upvoted videos to create an unique identity for each user. 

To build the application, OneUp will contain a front end, server, and database which will be designed using React, Node.js, and MongoDB (respectively). The front end will display the web pages for users to interact with, while the back end server queries the database of skate clips that multiple users can access concurrently. Besides the three main components, OneUp will use EJS as a template engine for dynamic pages, as well as Express -- a Node.js package -- for flexible routing. Other packages of Node.js and React will be used to fulfill the design and building requirements for OneUp. 

This is the second version of OneUp, so there will be a focus on components we were not able to tackel from the first version that can be found here: https://github.com/khiemlu96/OneUp/blob/master/documents/Requirements_Specification.md

<p align="center">
	<img src="../images/top_level.png" alt="High Level Diagram">
	
</p>


### Outline

- 5.2 CSCI Component Breakdown
- 5.3 Functional Requirements by CSC
- 5.4 Performance Requirements by CSC
- 5.5 Project Environment Requirements
    - 5.5.1 Development Environment Requirements
    - 5.5.2 Execution Environment Requirements

### 5.2 CSCI Component Breakdown

5.2.1 OneUp Frontend CSC -- GUI components for user interaction
	
	5.2.1.1 User Login CSU -- accessing user profile
	5.2.1.2 Profile Tab CSU -- module for editing or viewing user information  
	5.2.1.3 Home Page CSU -- main page that contains skate clips for user to watch
	5.2.1.4 Skate Clip CSU -- pop up window when video is clicked
	5.2.1.5 About Page CSU -- page contains information about the site
    
5.2.2 OneUp Server CSC -- server that will handle user requests and respond accordingly
	
	5.2.2.1 NodeJS CSU -- modules for responding with proper pages
		5.2.2.1.1 Express -- module for flexible routing
		5.2.2.1.2 EJS -- module for template engine to serve up dynamic pages
	5.2.2.2 HTTP CSU -- modules for network requests

5.2.3 OneUp Database CSC -- database components that will handle the data
	
	5.2.3.1 MongoDB -- 
		5.2.3.1.1 Mongoose CSU -- module that communicates with MongoDB to store or retrieve data
	5.2.3.2 Index CSU -- modules to index data


### 5.3 Functional Requirements

The main functionality of OneUp is to allow any registered user the ability to share his or her skate clip and receive recognition through the use of upvotes and downvotes from other users. The following requirements of the frontend interface walks through the functionalities that enable a user to easily interact with the web app. As mentioned, the main features for interaction include the ability to upload videos and upvote/downvote other videos seamlessly. The requirements of the server and database explain what is needed to allow successful user interaction, and the efficiency of the backend with querying video data. The ability for the web app to run smoothly with concurrent users (multiple logins and profiles) is also structured within the backend. Choosing the right functional requirements is important to provide a great user experience.

Note: "Should" requirements are requirements we are not 100% sure on following through with.

5.3.1 Frontend

    5.3.1.1 The Frontend shall display a login tab to login to a profile.
    5.3.1.2 The Frontend shall display a login form
	    5.3.1.2.1 Text entry field for username
	    5.3.1.2.2 Text entry field for password
    5.3.1.3 The Frontend shall have a button to submit the inputted login information for credential verification.
    5.3.1.4 The Frontend shall have a Create Account button if the user does not have a profile.
        5.3.1.4.1 The Create Account page shall have a signup form with 3 text entry fields that require the user to input a username, a password, and a password confirmation.
        5.3.1.4.2 If user inputs an existing username then page shall redirect user to a new signup form.
	        5.3.1.4.2.1 Error message shall also be prompted to tell user that the username already exists
        5.3.1.4.3 The Create Account page shall have a Submit button to save information to the database
    5.3.1.5 The Frontend shall have a Profile tab that replaces the Login tab when the user is logged in.
        5.3.1.5.1 The Profile tab shall have a Settings option to edit user information
          5.3.1.5.1.1 Username shall have the ability to be changed and saved to a new username nonexistent in the database
          5.3.1.5.1.2 Password shall have the ability to be changed and saved
          5.3.1.5.1.3 Personal bio shall be able to be created/changed and saved
        5.3.1.5.2 The Profile tab should give back an error message if the user attempts to change their username to one that already exists.
        5.3.1.5.3 The Profile tab shall allow the user and others to see information about the user
          5.3.1.5.3.1 Username shall be displayed on the top of the page in large font.
          5.3.1.5.3.2 Personal bio shall be displayed under the username in paragraph format
          5.3.1.5.3.3 Upvoted skate clips shall be displayed in a scrollable list of modals going from left to right
          5.3.1.5.3.4 Uploaded skate clips shall be displayed in a scrollable list of modals going from left to right
          5.3.1.5.3.5 Total number of received upvotes shall be displayed above the upvoted and uploaded skate clips
        5.3.1.5.4 The Profile tab shall allow users to upload an image of themselves as their profile picture.
        5.3.1.5.5 The Profile tab shall allow users to delete any video he or she uploaded along with a pop up confirmation to delete.
        5.3.1.5.6 The Profile tab shall allow users to upload a video through a Plus button
          5.3.1.5.6.1 The Plus button allows users to upload a video along with a title and description.
    5.3.1.6 The Frontend shall redisplay the login form if the user enters a username and password that does not match, along with an error message. 
    5.3.1.7 The Frontend shall include tabs to help direct users between pages.
    5.3.1.8 The Frontend should include a clickable logo of OneUp that redirects the user to the homepage.
    5.3.1.9 The Frontend shall include Home tab containing skate clips.
        5.3.1.9.1 The Home tab shall have each skate clip separated vertically by horizontal borders.
        5.3.1.9.2 The Home tab shall have a clickable Skate Clip that pops up the video and information of the clip.
            5.3.1.9.2.1 The Skate Clip pop up window shall have a description of the skate clip.
            5.3.1.9.2.2 The Skate Clip pop up window shall have upvote and downvote arrows.
            5.3.1.9.2.3 The Skate Clip pop up window shall have the sum of upvotes and downvotes for each skate clip along with the option to upvote and downvote.
                5.3.1.9.2.3.1 The system shall increment the sum of upvotes by 1 when the user upvotes the video, displayed on the Home tab and Skate Clip pop up window.
                5.3.1.9.2.3.2 The system shall decrement the sum of upvotes by 1 when the user downvotes the video, displayed on the Home tab and Skate Clip pop up window. 
            5.3.1.9.2.4 The Skate Clip pop up window shall have an embedded link of thee username to the user’s profile
            5.3.1.9.2.5 The Skate Clip pop up window shall have the ability to share the video through a Share button.
                5.3.1.9.2.5.1 The Share button shall provide a shareable link.
        5.3.1.9.3 The Home tab shall store any upvoted skate clips to a user’s personal library of upvoted skate clips in the Profile tab.
        5.3.1.9.4 The Home tab shall display username, title, date, upvote/downvote buttons, and number of upvotes for each video.
        5.3.1.9.5 The Home tab shall allow for registered users to upvote and downvote through the Home tab without going to the Skate Clip pop up window.
		    5.3.1.9.6 The Home tab shall prompt login window if unregistered users try to upvote/downvote. 
    5.3.1.10 The Frontend shall include a tab that directs the user to an About page that contains information about the site.
    5.3.1.11 The Frontend should include a Contact Us page if the user has any questions.
        5.3.1.11.1 The Contact Us page should include 3 text entry fields with one being the user’s first name, the second being the user’s last name, and the third being the message the user wants to submit.
        5.3.1.11.2 The Contact Us page should include a button for the user to submit their message.
    5.3.1.12 The Frontend shall display updated data every time page is reloaded/refreshed.

5.3.2 Server

    5.3.2.1 The Server shall respond to HTTP requests from clients. 
    5.3.2.2 The Server shall serve up proper Frontend files depending on the tabs or options from the drop down menus that the user selects.
    5.3.2.3 The Server shall have all files and images that creates the websites.
    5.3.2.4  The Server shall give limited functionalities to unregistered users.
    5.3.2.5  The Server shall handle errors such as errors caused by page not found/clip not found, and should not crash. 
    5.3.2.6 The Server shall prevent any unauthorized requests being processed. 
    5.3.2.7 The Server shall check the network performance and send report on the network status.
    5.3.2.8 The Server shall create a log file that consist of a list of activities the server performed. 
    5.3.2.9  The Server shall handle concurrency.
        5.3.2.9.1 The Server shall provide services to all users when handling multiple users at the same time.
    5.3.2.10 The Server shall verify user’s input. 
        5.3.2.10.1 The Server shall process only correct information from the user, and it ignores wrong data such as wrong email/wrong username etc. 
    5.3.2.11 The Server shall send the right request to the database for retrieval. 
    5.3.2.12 The Server shall get back to the user with the requested data.
    5.3.2.13 The Server shall update the home page by showing the highest rated video and list them on the homepage.  

	
5.3.3 Database

    5.3.3.1 The Database shall query stored data, which are the skate clips
        5.3.3.1.1 The Database shall be able to query the data for skate clips based on time of upload
        5.3.3.1.2 The Database should be able to query the data for skate clips based on category of skating selected from drop down menu
    5.3.3.2 The Database shall provide functionalities to support retrieve users with lost informations such as username/passwords. 
    5.3.3.3 The Database shall allow concurrency such as upvoting at the same time.
    5.3.3.4 The Database shall take measures to prevent data loss through backup and recovery management.
    5.3.3.5 The Database shall allow administrative access to developers to delete certain videos.

### 5.4 Performance Requirements

5.4.1 Switching Between Pages is Immediate -- Delay when changing between pages shall be minimal, taking no more than one second for the requested page to load.

5.4.2 Filtering Videos by Time of Upload Returned in 1Second -- It shall not take longer than 1 second to switch between “This week’s” and “All-time” videos.

5.4.3 Upvoting/Downvoting Videos is Immediate -- Vote count increments/decrements as soon as user votes.

5.4.4 Accessing User Profile Occurs Within 6-9 Seconds
    
    5.4.4.1 Login occurs in 6 seconds or less -- Within 6 seconds, user enters username and password, and is redirected to the home page. 
    5.4.4.2 Creating account occurs in 9 seconds or less -- Within 9 seconds, user enters email, username, password, password confirmation and is redirected to the home page.

5.4.5 GUI Design and Usability is focused on the upvote and downvote component of the web app.

5.4.6 Storage Efficiency -- Database shall efficiently store as much data using the least amount of storage

5.4.7 Usability Regarding Video Clips is Efficient as Possible
    
    5.4.7.1 Video loads within 3 seconds -- Clips are only maximum of 30 seconds and will be sent in bits through a buffer to the user. 
    5.4.7.2 Sharing videos within 4 seconds -- Shareable link is provided immediately for user to copy and paste.
    5.4.7.3 Uploading video within 15 seconds -- It should take less than 15 seconds for a user to upload a video to the database and display it on his/her profile. Clips are only a maximum of 30 seconds and should not be massive files. 
        5.4.7.3.1 Image quality of video shall be maintained through uploading process. 
        5.4.7.3.2 Sound quality of video shall be maintained through uploading process.

5.4.8 Web Page is Updated Consistently -- Vote count, video uploads, ranking/order of videos shall be updated on a user’s screen every time page is reloaded. 

5.4.9 Loading Videos will take under 3 seconds --  A maximum of 8 videos are loaded/added to a page at once when scrolling to the bottom of the page. It should not take longer than 3 seconds to do so.


### 5.5 Project Environment Requirements

With a few frameworks such as Node.js as well as the built in modules and node packages, this will give us the tools that can efficiently respond to client requests without having to resort to boilerplate code.

#### 5.5.1 Development Environment Requirements

| CSC | Requirement |
|---|---|
|Front End | React.js |
|Server | Node.js, npm, Nodemon, EJS, Express, Mongoose |
|Database | MongoDB |

#### 5.5.2 Execution Environment Requirements 

| CSC | Requirement |
|---|---|
|Front End | Building I/O interface with React  |
|Server | Cloud server (possibly AWS or Google Cloud Platform) |
|Database | mLab as a cloud database |
