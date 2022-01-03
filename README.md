## 1. 项目初始化及配置
- 1.1、 新建目录：
```
mkdir 目录名
```  
- 1.2、进入项目
```
cd 目录
``` 
- 1.3、根目录初始化package.json文件
```
 npm init -y
``` 
  
- 1.4、根目录初始化git仓库
```
 git init
``` 
  
- 1.5、根目录新建.npmrc配置文件
  
    用于配置下该项目下的npm 的一些配置，如设置淘宝源：
  
```
  registry=https://registry.npm.taobao.org/
  ```

- 1.6、根目录新建.editorconfig.js,跨编辑器编码风格的配置
  
  配置内容如下：
```
# EditorConfig is awesome: https://EditorConfig.org

#表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件
root=true

#对于所有的文件 始终 缩进风格，可选配置有 tab 和 space
[*]
indent_style = space

#缩进大小，可设定为 1-8 的数字
indent_size = 2

#编码格式，通常都是选 utf-8
charset = utf-8

#去除多余的空格

#在尾部插入一行,不建议用
insert_final_newline = false

#换行符，可选配置有 lf ，cr ，crlf
end_of_line = lf

[*.md]
trim_trailing_whitespace = false
```
- 1.7、配置 Prettier代码风格的文件

```
npm install pretter -D
```
新建.prettierrc 或者 prettier.config.js 文件,配置如下：

```
module.exports = {
  //对象的最后一个属性末尾也会添加 ,
  trailingComma: 'all',

  //缩进大小
  tabWidth: 2,

  //分号是否添加
  semi: true,

  //是否单引号
  singleQuote: true,

  endOfLine: 'lf',

  //单行代码最长字符长度，超过之后会自动格式化换行
  printWidth: 120,

  //在对象中的括号之间打印空格
  bracketSpacing: true,

  //箭头函数的参数无论有几个，都要括号包裹
  arrowParens: 'always',
}


```
新建.prettierignore 忽略指定文件、目录的代码格式化，和.gitignore 一样,配置如下
```
/dist/*
/node_modules/**
**/*.svg
/public/*
```

代码美化怎么用呢？
前提先把 插件安装  [Prettier - Code formatter]((https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) ,然后：
1. 方法一： 在 package.json 的srcipt 字段下 添加命令：提交代码前 直接 运行 npm run lint:prettier
```
    "scripts": {
      //其他配置
      "lint:prettier": "prettier --write  \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\""
    }
```
2. 方法二：保存文件前自动格式化，根目录新建目录.vscode,在该.vscode目录新建settings.json 配置文件
```
{ 
  // 指定哪些文件不参与搜索
  "search.exclude": {
    "**/node_modules": true,
    "dist": true,
    "yarn.lock": true
  },
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

- 1.8、eslint 配置
```
//安装依赖
npm install eslint -D

//初始化配置文件
npx eslint --init

```
按安装提示

1. How would you like to use ESLint?
   
   - 选择第三条 To check syntax, find problems, and enforce code style ，检查语法、检测问题并强制代码风格。
2. What type of modules does your project use?
   - 选择 JavaScript modules (import/export),项目非配置代码都是采用的 ES6 模块系统导入导出

3. Which framework does your project use?
   - 选择 React
  
4. Does your project use TypeScript?(你的项目使用typescript 吗？)
   -  选typescript,eslint 配置文件会给我们默认配上支持 Typescript 的 parse 以及插件 plugins 

5. Where does your code run?(你代码运行环境)
   - Browser 和 Node 环境都选上，可能会写node 代码

6. How would you like to define a style for your project?(您希望如何为项目定义样式？)
   - 选择 Use a popular style guide ，使用社区制定好的代码风格
  
7. Which style guide do you want to follow？(您希望遵循哪种样式指南)
   - 选择 Airbnb 风格,使用社区定制的
  
8. What format do you want your config file to be in？（您希望配置文件采用什么格式）
   - 选择 JavaScript
  
9. Would you like to install them now with npm?(您想现在用npm安装它们吗)
    - 选yes
  
安装过程中会出现报错，提示找不到typescript模块,因为我们选择了typescript,但是还没安装，所以会报错,直接安装typescript

```
npm install typescript -D
```
根目录多了一个.eslintrc.js 的文件,默认内容如：
```
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb','airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
}

```

这个时候,会发现 ESLint、 Prettier 出现冲突，所以要先安装两个库，解决冲突

```
npm install eslint-plugin-prettier eslint-config-prettier -D
```

安装完，在.eslintrc.js 新增一些配置

```
{
    //其他配置 ...

    extends:{
        //其他配置 ...
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    },

    plugins: [//其他配置 ..., 'prettier'],

    //这里加一些eslint 的规则
    rules: {
        'jsx-quotes': [ERROR, 'prefer-single'],
        'no-unused-vars': OFF,
        'no-console': OFF,
        'no-unused-expressions': OFF,
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
            },
        ],
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never',
            },
        ],
    },
}

```

你以为配置完了吗，接着还要配置.vscode/settings.json 文件，添加配置

```
   "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "typescript.tsdk": "./node_modules/typescript/lib",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },

```
最后再安装vscode 安装扩展 eslint，eslint 的基本配置才算完成,具体规则配置参考[eslint中文文档](https://eslint.bootcss.com/docs/user-guide/configuring)

- 1.9 StyleLint 的样式初始化配置
  安装依赖
```
npm install stylelint stylelint-config-standard stylelint-order  stylelint-config-prettier -D
```
根目录新建.stylelintrc.js,写入以下配置

```

module.exports = {
    root: true,
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    rules: {
        //其他配置参考官方
         'no-empty-source': null,
        'named-grid-areas-no-invalid': null,
        'unicode-bom': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'rule-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'first-nested'],
            },
        ],
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        'order/order': [
            [
                'dollar-variables',
                'custom-properties',
                'at-rules',
                'declarations',
                {
                    type: 'at-rule',
                    name: 'supports',
                },
                {
                    type: 'at-rule',
                    name: 'media',
                },
                'rules',
            ],
            { severity: 'warning' },
        ],
    },
     ignoreFiles: [
        'node_modules/**/*',
        'build/**/*',
        'dist/**/*',
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
    ],
}
```

- 2.0、配置lint-staged，主要是对代码在git 提交前进行eslint,stylelint 的校验，这里推荐用这两个库：husky lint-staged
```

npm install husky lint-staged -D
```
然后再package.json 文件中配置：

```
{
 
  // 其他配置...

  
     "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{ts,tsx,js}": [
            "eslint --config .eslintrc.js"
        ],
        "*.{css,less,scss}": [
            "stylelint --config .stylelintrc.js"
        ],
        "*.{ts,tsx,js,json,html,yml,css,less,scss,md}": [
            "prettier --write"
        ]
    },
}
```
   