# Unhandled Promise Rejection in Express.js Asynchronous Route Handler

This repository demonstrates a common error in Express.js applications where asynchronous operations within route handlers lack proper error handling, leading to server crashes.

## Problem
The `bug.js` file contains an Express.js server with a route handler that performs an asynchronous operation.  This operation might throw an error, but the code doesn't catch and handle the error gracefully.  This results in an unhandled promise rejection, causing the server to terminate unexpectedly.

## Solution
The `bugSolution.js` file shows how to properly handle errors in asynchronous Express.js route handlers using `.catch()` to gracefully handle errors and prevent crashes.