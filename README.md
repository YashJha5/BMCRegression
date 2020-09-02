# BENJAMIN MOORE

End-to-End testing using node.js, Protractor and Jasmine.

### Why Protractor? Isn't it an AngularJS thing?
Yes, Protractor is part of the AngularJS lineup and that is not what we are using. But all the Angular specific things are extra features which other frameworks (WebdriverIO, NightwatchJS, etc...) are not offering anyway. Read this for more details:

http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/

## Install
1. clone repo
2. npm install

## Run tests
protractor conf.js

## Allure Reports
First install Allure tools for your OS:

http://wiki.qatools.ru/display/AL/Allure+Commandline

1. allure generate allure-results/
2. allure report open
