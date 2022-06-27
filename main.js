let build = (datas = []) => {
  if (datas.length > 0) for (let data of datas) {
    elt.addZone(data);
  }
}


build('test', 'retest', 'et re-retest');
