module.exports = {
    "env": {
        "es2020": true
    },
    "extends": [
        "prettier",
        "prettier/react",
        "airbnb"
    ],
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'prettier',
        "markdown"
    ],
    "settings": {
        "import/resolver": {
          "babel-plugin-root-import": {
            "rootPathPrefix": "~",
            "rootPathSuffix": "src"
          }
        }
    },
    "rules": {
        'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.md']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'react/prop-types': 'off',
    "camelcase":"error",
    // 'no-param-reassign': 'off',
    'no-console': 'off',
    "arrow-body-style":"off",
    "operator-linebreak":"off",
    "comma-dangle": 'off'
    }
};
