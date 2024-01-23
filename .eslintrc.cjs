module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "vue"
  ],
  "rules": {
    // 强制双引号
    "quotes": [1, "double"],
    // 在语句末尾使用分号
    "semi": [1, "always"],
    // 使用 === 替代 ==
    "eqeqeq": [2, "allow-null"],
    // 数组每一项要有空格
    "array-bracket-spacing": [2, "never"],
    //禁止重复声明变量
    "no-redeclare": 2,
    // 变量未定义前不能使用
    "no-use-before-define": 2,
    //禁用var，用let和const代替
    "no-var": 1,
    //禁止修改const声明的变量
    "no-const-assign": 2,
    // 非必要情况下 首选const声明
    "prefer-const": 1,
    // 变量声明必须赋初始值
    "init-declarations": 0,
    // 规定函数括号前必须加个空格
    "space-before-function-paren": [
      1,
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "never"
      }
    ],
    //箭头函数用小括号括起来
    "arrow-parens": [1, "as-needed"],
    //缩进风格 2个空格
    "indent": [2, 2]
  }
};
