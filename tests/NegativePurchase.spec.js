const { test, expect } = require("@playwright/test");

test("Negative Purchase Products", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await page.pause();
    await page.getByRole("heading", { name: "Samsung galaxy s6" }).click();
    await page.locator('a:has-text("Add to cart")').click();
    await page.click("#cartur");
    await page.getByRole("button", { name: "Place Order" }).click();
    await page.getByRole("button", { name: "Purchase" }).click();

    await page.on("dialog", (dialog) => {
        const errorMessage = dialog.message();
        console.log("Error Message:", errorMessage);
        dialog.accept();
    });

    await page.close();
});
