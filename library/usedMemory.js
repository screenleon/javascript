/**
 * get used memory with MB unit
 * only use in nodejs
 */
const usedMemory = () => {
    return Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;
}

// console.log(`${usedMemory()} MB`);