const { test, expect } = require("@playwright/test");

test("Login Test", async ({ page }) => {
    //First we go to the page
    await page.goto("https://www.demoblaze.com/index.html");

    //Then, we access the login modal by clicking the element with the id, fill the credentials, and select the button to click it
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.getByRole("button", { name: "Log in" }).click();

    //To verify that the login was successful, we select the element with id #nameofuser, which refers to the user name displayed in the page
    await page.waitForSelector("#nameofuser");

    //we also display it through a console log to easily verify this
    const username = await page.textContent("#nameofuser");
    console.log("Logged in as:", username);

    //finally, we close the page
    await page.close();
});
