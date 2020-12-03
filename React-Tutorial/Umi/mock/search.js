export default {
  'GET /api/search': {
    lists: ['a', 'b', 'c'],
  },
  'GET /api/asyncSearch': (req,res) => {
    //console.log(req.query.value)
    setTimeout(()=>{
      res.json({
        lists: Array(10).fill(req.query.value)
      })
    },1000);
  }
};
