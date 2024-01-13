const { test, expect } = require("@playwright/test");

test("Negative Purchase Products", async ({ page }) => {
    //First we go to the page

    await page.goto("https://www.demoblaze.com/index.html");

    //We do the same process as purchase product, but instead of filling the fields, we click on Purchase with the fields empty to prompt the error.
    await page.getByRole("heading", { name: "Samsung galaxy s6" }).click();
    await page.locator('a:has-text("Add to cart")').click();
    await page.click("#cartur");
    await page.getByRole("button", { name: "Place Order" }).click();
    await page.getByRole("button", { name: "Purchase" }).click();

    // Since the error handling is done through an alert, we enter the alert through the page.on method, and confirm the dialog message text. We then close the dialog to continue with the process
    await page.on("dialog", (dialog) => {
        const errorMessage = dialog.message();
        console.log("Error Message:", errorMessage);
        dialog.accept();
    });

    // Finally, we close the page
    await page.close();
});
