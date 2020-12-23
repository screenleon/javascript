const ytsr = require('ytsr');

const argv = process.argv.slice(2);

ytsr(argv[0])
   .then(response => {
      const result = [];
      response.items.forEach(element => {
         if (!element.duration || element.isUpcoming) return;
         result.push({
            title: element.title,
            date: element.uploadedAt,
            url: element.url,
            duration: element.duration
         })
      })
      console.log(result);
   })