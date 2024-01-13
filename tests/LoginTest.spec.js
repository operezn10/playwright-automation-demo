const { test, expect } = require("@playwright/test");

test("Login Test", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await page.pause();
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForSelector("#nameofuser");

    const username = await page.textContent("#nameofuser");
    console.log("Logged in as:", username);

    await page.close();
});
