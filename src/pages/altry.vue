<!-- src/App.vue -->
<template>
    <div class="container">
        <div class="navbar">
            <span class="nav-icon">←</span>
            <span class="nav-title"></span>
            <span class="nav-icon">≡</span>
        </div>
        <div class="card">
            <div class="image-placeholder"></div>
            <div class="status">Available</div>
            <div class="options-button">⋮</div>
        </div>
        <div class="card">
            <div class="image-placeholder"></div>
            <div class="status">Available</div>
            <div class="options-button">⋮</div>
        </div>
        <div class="card">
            <div class="image-placeholder"></div>
            <div class="status">Available</div>
            <div class="options-button">⋮</div>
        </div>
        <div class="card">
            <div class="image-placeholder"></div>
            <div class="status">Available</div>
            <div class="options-button">⋮</div>
        </div>
        <div style="height: 42%;"></div>
        <button class="submit-button">Submit</button>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f4ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    height: 100%;
    width: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: #007bff;
    font-size: 20px;
}

.card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f4ff;
    padding: 0px;
    border-radius: 10px;
    margin: 30px 0;
}

.image-placeholder {
    width: 50px;
    height: 50px;
    background-color: #d8e3ff;
    border-radius: 5px;
}

.status {
    flex-grow: 1;
    text-align: center;
    color: #007bff;
}

.options-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #007bff;
    cursor: pointer;
}

.submit-button {
    width: 100%;
    padding: 15px 0;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}

  </style>
  