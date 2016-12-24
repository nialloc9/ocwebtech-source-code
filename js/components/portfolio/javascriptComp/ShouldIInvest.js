import React from 'react'

export default class ShouldIInvest extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/ShouldIInvest/1start.PNG" className="portfolio_block_image_summary" alt="should I Invest application image"/>
              </div>
              <br /><br />

              <p>Site: <a href="http://shouldiinvest.000webhostapp.com/#!/">shouldiinvest.000webhostapp.com</a></p>
              <p>Source Code: <a href="https://github.com/nialloc9/angularjs-should-i-invest-web-app">GitHub</a></p>

              <br /><br />

              <p>
                AngularJS is an awesome framework that can do some really powerful things. This is ‘should I invest’ web application that utilizes angular js and the yahoo finance
                API to give stock recommendations. It takes in financial data such as the PEG ratio, beta, debt ratio, and many more to give a stock a rating on whether it
                is worth buying. The cookies service from the angular framework is used to track user visits to the application and provides custom welcoming messages.
                Upon loading the page inside the controller the cookie is checked and a custom message is assigned to the scope which is then outputted to the user screen.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  //set timestamp
  var date = new Date();
  var history = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

  //set msg
  $scope.msg = "Welcome. We see this is your first visit. Take your time to look around and be sure to leave some feedback.";
  $scope.history = '';
  if($cookies.get('history') != null){
    $scope.msg = "Hey, welome back. Thanks for coming back. We see this is your first visit since ";
    $scope.history = $cookies.get('history');

    //set new history cookie
    $cookies.put('history', history);
  }else{
    $cookies.put('history', history);
  }
  `}
                </pre>
              </div>
              <br /><br  />

              <p>
                When the user clicks the button to calculate the stock recommendation the `function` userTickerInputBtnClick() is called. This makes a http get
                request to the yahoo finance API to fetch data based on the ticker symbol the user entered. This is first changed to uppercase to ensure it
                adheres to business rules on ticker symbols. This returns an object with a results object that holds the query object with the data we want.
                It is important to note here that this object has loads of different types of data about a company but we do not need it all so therefore only the
                 required data is used. After this the data is checked and a color is assigned for that data that will be added to the element that holds it.
                 Next the doCalculations() `function` is called that we will look at in further detail below and lastly the showResult variable is set to true.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  $scope.userTickerInputBtnClick = function(){
  $http.get(
      "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22"+$scope.UserInputTicker.toUpperCase()+"%22,%22AAPL%22)&format=json&env=http://datatables.org/alltables.env"
  ).then(function(response){
        var results =response.data.query.results.quote[0];

        //add to scope
        $scope.companyStockPrice = (results.LastTradeWithTime != null) ? results.LastTradeWithTime : "NA";
        $scope.companyDividendShare = (results.DividendShare != null) ? results.DividendShare : "NA";
        $scope.companyPEGRatio = (results.PEGRatio != null) ? results.PEGRatio : "NA";
        //gets other stock info here but for simplicty has been omitted in this example

        $scope.changeColor = ($scope.companyStockChange > 0) ? "positiveResult" : "negativeResult";
        //changes other stock info here but simplicty has been omitted in this example

        //do calculations
        $scope.doCalculations();

        //show results
        $scope.showResult = true;
      });
}
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                This showResult variable is what is included inside the ng-show directive for the result portion of site.
                The ng-show directive is one of the most useful and awesome directives in angular in my opinion. It allows us to hide and show
                 different portions of our application depending on whether or not a given expression is true. This is really helpful here because we don’t
                 want to show our results section until we have the data from the yahoo finance API but we can’t get that until the user enters a ticker symbol.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
                  {`
<div class="companyResultsArea" data-ng-show="showResult">
                    `}
                </pre>
              </div>

              <br /><br />


              <p>
                The doCalculations() `function` calculates the recommendation variable value that is shown at the bottom of the application. It looks at  the data
                provided like the PEG ratio or the debt ratio and decides to add or take away from the overall recommendation value based on this. For a debt ratio
                of less than 0.4 is considered good and assigns an extra 3.5 to the recommendation value. After the result has been decided the application
                evaluates it and assigns a color to the element that holds this value.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  $scope.calculateStockRecommendation = function(){

    //check debt ratio
    if($scope.debtRatio < 0.4){
      $scope.recommendation = $scope.recommendation + 3.5;
    }

    //check PEG ratio
    if(($scope.companyPEGRatio < 1.2) && ($scope.companyPEGRatio > 0)){
      $scope.recommendation = $scope.recommendation + 3.5;
      $scope.PEGColor = "positiveResult";
    }else{
      $scope.PEGColor = "negativeResult";
    }

    //check beta value
    if($scope.companyBeta < 1){
      $scope.recommendation = $scope.recommendation + 1;
      $scope.betaColor = "positiveResult";
    }else{
      $scope.betaColor = "negativeResult";
    }

    //other data checked here but has been omitted for simplicity in this example

    //set result color
    $scope.resultColor = ($scope.recommendation > 5) ? "positiveResult" : "negativeResult";
  }

  `}
                </pre>
              </div>

              <br /><br />

              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/ShouldIInvest/5fullListOfDataWithKeyValuesHighlightedGreenForGoodRedForBadAndResult.PNG" className="portfolio_block_image_summary" alt="results image"/>
              </div>

              <br /><br />
              <p>
                AngularJS is a very powerful framework and has lots of very useful features. I really enjoyed making this project so I hope you enjoyed it too and please any feedback is welcome.
              </p>
            </div>
          </div>
      </div>
    )
  }
}
