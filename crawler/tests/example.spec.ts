import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
    await page.goto("https://www.msnbc.com/");
    // const title = page.locator(".navbar__inner .navbar__title");
    // await expect(title).toHaveText("Chromatic Systems Introduction");
    await page.screenshot({ path: "msnbc.png" });
});
