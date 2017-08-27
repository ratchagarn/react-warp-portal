# react-warp-portal
Render react components everywhere in the DOM.

```jsx
<WarpPortal>
  <Modal open={openModal}>
    <button onClick={this.handleCloseModal}>Close Modal</button>
    <h1>Modal - 1</h1>
    <p>Hello world!</p>
  </Modal>
</WarpPortal>


<WarpPortal container={document.getElementById('some-where-in-the-dom')}>
  <Modal open={openModal}>
    <button onClick={this.handleCloseModal}>Close Modal</button>
    <h1>Modal - 2</h1>
    <p>Hello everybody!</p>
  </Modal>
</WarpPortal>
```
