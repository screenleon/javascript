const ytsr = require('ytsr');

const argv = process.argv.slice(2);

const filterString = argv[1];
const sort = argv[2];

ytsr(argv[0])
   .then(response => {
      let result = [];
      response.items.forEach(element => {
         // if (!element.duration || element.isUpcoming) return;
         result.push({
            title: String(element.title).replace(/(^|\D)(\d)(?!\d)/g, "$10$2"),
            date: element.uploadedAt,
            url: element.url,
            duration: element.duration
         })
      })

      if(!!filterString) {
         result = result.filter(element => {
            return String(element.title).search(filterString) > -1;
         });
      }
      
      if(sort === "true" || sort === "1") {
         result.sort(function (a, b) {
            return (a.title > b.title) ? 1 : -1;
         })
      }
      
      console.log(JSON.stringify(result));
   })