var mysql = require('mysql');



// 创建mysql 数据池的配置
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'nodesql',
  port     : 3306
});


// 查询方法
let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {

      if (err) {
      	console.log('query方法出错, mysql.js  23行错误信息如下：：：：',err);
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

};

// 创建 users表的mysql语句
let users =
    `create table if not exists userstest(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     pass VARCHAR(100) NOT NULL COMMENT '密码',
     moment VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    );`


// 建表方法
let createTable = ( sql ) => {
	console.log('建立表');
  return query( sql, [] )
}
// 建表
createTable(users)

