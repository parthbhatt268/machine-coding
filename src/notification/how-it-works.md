# Notification System Flow (Its called as Static CLASS pattern)

1. **App.js**  
   You render `<ToastContainer />` once in your root.

2. **ToastContainer mounts**

   - `componentDidMount()` runs
   - Calls `Notifier.subscribe(this.handleNotify)`

3. **Notifier.subscribe**  
   Adds `handleNotify` to its internal `listeners` array.

4. **Trigger a toast**  
   Anywhere you call `Notifier.success('…')` (or `.error`, etc.)…

5. **Notifier.notify**  
   Loops over `listeners` and calls each function with `{ type, message }`.

6. **handleNotify fires**  
   In `ToastContainer`:

   - Create an `id`
   - Append `{ id, type, message }` to `state.toasts`
   - Schedule `removeToast(id)` after 3 s

7. **Render & cleanup**  
   React re-renders to show the new toast, then auto-removes it when the timer fires.

---

**Result:**  
Publish from anywhere via `Notifier.*()`, and your single `<ToastContainer />` handles display and removal.

**Usage examples:**

```js
// Showing a success toast after saving data
Notifier.success("Data saved successfully!");

// Showing an error toast on failure
Notifier.error("Failed to load items.");
```
