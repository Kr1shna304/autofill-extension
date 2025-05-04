# Job Application Autofill Extension

This is a simple Chrome/Brave extension designed to **autofill specific job application fields** on the final submission page of certain job portals (e.g., People First). It helps streamline the application process by automatically selecting predefined values for a fixed set of dropdown fields.

## 🔧 What It Does

- Fills 9 predefined fields automatically with your preferred values (e.g., Vacancy Source, Relatives, Disability status, etc.).
- Only works on specific job pages where these fields appear.
- Triggered **manually** when the user clicks the extension icon (not on page load).
- Can be customized easily to match different field labels and values.

---

## 📝 Customization

The autofill behavior is controlled in `content.js`. You can:

- **Edit** the dropdown options you want to fill.
- **Change the titles or field IDs** based on updates in the target web page.
- **Add or remove fields** by modifying the `fieldMap` array in `content.js`.

### Example snippet from `content.js`:
```javascript
const fieldMap = [
    { id: "18:_input", title: "People First" },  // Vacancy Source
    { id: "22:_input", title: "No" },            // Relatives
    { id: "26:_input", title: "I do not have disability" }, // Disability
    { id: "30:_input", title: "Not Applicable" },           // Right To First Interview
    { id: "34:_input", title: "No" },            // Currently employed with Agency
    { id: "38:_input", title: "No" },            // Received Promotional Appointment
    { id: "42:_input", title: "No" },            // Convicted felimony
    { id: "46:_input", title: "No" },            // Guilty in crime
    { id: "50:_input", title: "No" }             // Guilt withheld in crime
];
````

Just update the `"id"` and `"title"` values as per your need.

---

## 🧪 How to Use

1. Clone or download the project folder.
2. Open your browser (Chrome or Brave) and go to:

   * `chrome://extensions` for Chrome
   * `brave://extensions` for Brave
3. Enable **Developer Mode** (toggle switch at top right).
4. Click **Load unpacked**.
5. Select the folder containing:

   * `manifest.json`
   * `content.js`
   * `background.js` (if present)
   * `icon.png` (optional)
6. Open the job application page (final form).
7. Click the extension icon (from the browser toolbar) to autofill the fields.

---

## 📌 Notes

* This extension **does not submit the form** — it only fills in dropdown selections.
* It uses small delays to mimic user interaction and allow UI elements to load.
* The extension is only meant for personal use on job portals with a known and stable structure.

---

## 💡 Tip

You can increase the delay time in `content.js` to ensure dropdowns load correctly:

```javascript
delay += 1500; // 1.5 seconds between each selection
```

---

## ✅ Tested On

* Brave Browser (Chromium-based)
* Chrome Browser

---

## 📁 Files Overview

* `manifest.json` – Extension config
* `content.js` – Core autofill logic (edit this to customize)
* `icon.png` – Extension icon (optional)

---

Feel free to modify and extend this tool to fit your workflow.
Happy job applying! 🚀

```