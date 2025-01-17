# LinkedIn Scraper

<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="Images/First View.png" alt="Logo" >
  <h3 align="center">LinkedIn Scraper</h3>

  <p align="center">
    An efficient tool to streamline your job search and networking on LinkedIn!
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

LinkedIn Scraper is a powerful tool designed to help you efficiently search for and connect with professionals on LinkedIn. By automating the process of finding relevant contacts, it saves you valuable time in your job search or networking efforts.

Here's why LinkedIn Scraper is awesome:
* Your time should be focused on applying to jobs and making meaningful connections, not on manual searches
* It eliminates the repetitive task of searching for people to reach out to
* Simply enter a company name in the CLI and get a list of top candidates to connect with


<!-- GETTING STARTED -->
## Getting Started

To get LinkedIn Scraper up and running on your local machine, follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Mito91243/Linkedin-Scraper.git
    ```
2. Go to main folder
   ```sh
   cd .\main\
    ```
3. Download Dependencies
   ```sh
   go mod tidy
    ```
4. Put credentials in the .env file
   ```sh
   cookie = "YOUR_COOKIE"
   csrf = "YOUR_CSRF_TOKEN"
    ```
5. Run the Program
   ```sh
   go run .
    ```
   
<!-- USAGE EXAMPLES -->
## Usage

LinkedIn Scraper is easy to use. Here's a quick guide to get you started:

1. **Run the program and enter the company name you're interested in:**
2. **Choose the position you want to scrape:**

  ![Second View](https://github.com/user-attachments/assets/4c2a66eb-e13a-43e0-973f-ef0a44b7490c)

3. **The program will fetch and display relevant profiles:**

  ![Results View](https://github.com/user-attachments/assets/60a529a4-8731-4475-a651-1ab15ed1f4a1)

### Setting up Environment Variables
  ![env](https://github.com/user-attachments/assets/3efb32fd-812c-4b09-a6b4-a1913c08827d)
To use LinkedIn Scraper, you need to provide your LinkedIn CSRF token and cookie. Here's how to get them:

1. **Log in to LinkedIn in your web browser.**
2. **Open the browser's Developer Tools** (usually F12 or right-click > Inspect).
3. **Go to the Network tab.**
4. **Refresh the page** and search for any graphql request.
5. **In the request headers**, find the 'csrf-token' and 'cookie' values:
6. **If you are facing trouble just export it to postman**, and then get the headers from the autocode generator innit

   ![Network Tab](https://github.com/user-attachments/assets/66a1f6e8-abb3-4ef3-a01a-1d91b7f58752)

7. **Create a `.env` file in the main folder** and add these values:


<p align="right">(<a href="#readme-top">back to top</a>)</p>
