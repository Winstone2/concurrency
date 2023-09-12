// Example of concurrency using Promises
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 500);
    });
}

async function runConcurrentTasks() {
    await Promise.all([task1(), task2()]);
    console.log("All tasks completed concurrently.");
}

runConcurrentTasks();
