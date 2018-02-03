'use strict';

const { Controller } = require('egg');

class StampController extends Controller {
  async list(ctx) {
    const {
      query: { start, count, from },
      model: { Stamp }
    } = ctx;
    const { config } = this;
    
    const stamp = await Stamp
      .find({
        from: from
      }, 'name date flag pics')
      .sort({date: -1})
      .skip(start || 0)
      .limit(count || 10)
      .lean();

    ctx.body = stamp.map(item => {
      item.coverPic = item.pics[0] || '';
      item.coverPic = item.coverPic.replace(
        /^https?:\/\/[^\/]+/, 
        () => `//${config.static.qiniu.domain}${config.static.qiniu.path}`
      );
      delete item.pics;
      return item;
    });
  }
}

module.exports = StampController;
