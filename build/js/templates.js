angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('pages/jobDetails/jobDetails.template.html','<div class="scrollContainer">\n    <div class="detailsCard card paddingExtraLarge selfCenter flexWidth50">\n        <div class="cardContent">\n            <span class="jobType pg">Prospect Generator</span>\n            <div class="locationList flex isRow alignCenter flexWrap paddingSmall">\n                <span class="label">Locations:</span>\n                <span class="itemTag">Ohio</span>\n                <span class="itemTag">Michigan</span>\n                <span class="itemTag">North Dakota</span>\n                <span class="itemTag">South Dakota</span>\n            </div>\n            <div class="productList flex isRow alignCenter flexWrap paddingSmall">\n                <span class="label">Products:</span>\n                <span class="itemTag">Auto</span>\n                <span class="itemTag">Life</span>\n                <span class="itemTag">RV</span>\n                <span class="itemTag">Golf Cart</span>\n            </div>\n            <div class="startDate flex isRow alignCenter paddingSmall">\n                <span class="label">Start:</span>\n                <span class="date">10-26-2016</span>\n                <span class="time">11:00 PM EST</span>\n            </div>\n            <div class="endDate flex isRow alignCenter paddingSmall">\n                <span class="label">End:</span>\n                <span class="date">10-28-2016</span>\n                <span class="time">3:00 AM EST</span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="sideNav navBar flex">\n    <a ui-sref="newJob">Edit</a>\n    <a href="/#/">Delete</a>\n    <a href="/#/">Back</a>\n</div>\n');
$templateCache.put('pages/home/home.template.html','<div class="scrollContainer">\n\t<span class="sectionHeader">Active</span>\n\t<div class="cardContainer">\n\t\t<div class="jobCard card">\n\t\t\t<a ui-sref="jobDetails" class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Ohio</span>\n\t\t\t\t\t<span class="itemTag">Michigan</span>\n\t\t\t\t\t<span class="itemTag">North Dakota</span>\n\t\t\t\t\t<span class="itemTag">South Dakota</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Auto</span>\n\t\t\t\t\t<span class="itemTag">Life</span>\n\t\t\t\t\t<span class="itemTag">RV</span>\n\t\t\t\t\t<span class="itemTag">Golf Cart</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">10-26-2016</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">10-28-2016</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<span class="sectionHeader">Upcoming</span>\n\t<div class="cardContainer disabled">\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType um">Under Maintenance</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType um">Under Maintenance</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType um">Under Maintenance</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType um">Under Maintenance</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType um">Under Maintenance</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<span class="sectionHeader">Ongoing</span>\n\t<div class="cardContainer disabled">\n\t\t<div class="jobCard card">\n\t\t\t<div class="cardContent">\n\t\t\t\t<span class="jobType pg">Prospect Generator</span>\n\t\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Michigan</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t\t<span class="itemTag">Auto</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t\t<span class="date">04-27-2012</span>\n\t\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t\t<span class="label">End:</span>\n\t\t\t\t\t<span class="date">N/A</span>\n\t\t\t\t\t<span class="time">N/A</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class="sideNav navBar flex">\n\t<a ui-sref="newJob">New</a>\n</div>\n');
$templateCache.put('pages/other/other.template.html','<h2>Hello Other Page ID: {{id}}</h2>\n\n<h3>Food from first page: {{store.food}}</h3>');
$templateCache.put('pages/newJob/newJob.template.html','<div class="scrollContainer">\n\n    <div class="formContainer marginExtraLarge flexWidth50">\n        <form>\n            <div class="form-group">\n                <label for="power">Job Type</label>\n                <select class="form-control" id="power" required>\n                    <option value="pg">Prospect Generator</option>\n                    <option value="um">Under Maintenance</option>\n                </select>\n            </div>\n            <div class="form-group">\n                <label for="power">Locations</label>\n                <select class="form-control" id="power" required>\n                    <option value="AL">Alabama</option>\n                    <option value="AK">Alaska</option>\n                    <option value="AZ">Arizona</option>\n                    <option value="AR">Arkansas</option>\n                    <option value="CA">California</option>\n                    <option value="CO">Colorado</option>\n                    <option value="CT">Connecticut</option>\n                    <option value="DE">Delaware</option>\n                    <option value="DC">District Of Columbia</option>\n                    <option value="FL">Florida</option>\n                    <option value="GA">Georgia</option>\n                    <option value="HI">Hawaii</option>\n                    <option value="ID">Idaho</option>\n                    <option value="IL">Illinois</option>\n                    <option value="IN">Indiana</option>\n                    <option value="IA">Iowa</option>\n                    <option value="KS">Kansas</option>\n                    <option value="KY">Kentucky</option>\n                    <option value="LA">Louisiana</option>\n                    <option value="ME">Maine</option>\n                    <option value="MD">Maryland</option>\n                    <option value="MA">Massachusetts</option>\n                    <option value="MI">Michigan</option>\n                    <option value="MN">Minnesota</option>\n                    <option value="MS">Mississippi</option>\n                    <option value="MO">Missouri</option>\n                    <option value="MT">Montana</option>\n                    <option value="NE">Nebraska</option>\n                    <option value="NV">Nevada</option>\n                    <option value="NH">New Hampshire</option>\n                    <option value="NJ">New Jersey</option>\n                    <option value="NM">New Mexico</option>\n                    <option value="NY">New York</option>\n                    <option value="NC">North Carolina</option>\n                    <option value="ND">North Dakota</option>\n                    <option value="OH">Ohio</option>\n                    <option value="OK">Oklahoma</option>\n                    <option value="OR">Oregon</option>\n                    <option value="PA">Pennsylvania</option>\n                    <option value="RI">Rhode Island</option>\n                    <option value="SC">South Carolina</option>\n                    <option value="SD">South Dakota</option>\n                    <option value="TN">Tennessee</option>\n                    <option value="TX">Texas</option>\n                    <option value="UT">Utah</option>\n                    <option value="VT">Vermont</option>\n                    <option value="VA">Virginia</option>\n                    <option value="WA">Washington</option>\n                    <option value="WV">West Virginia</option>\n                    <option value="WI">Wisconsin</option>\n                    <option value="WY">Wyoming</option>\n                </select>\n            </div>\n            <div class="form-group">\n                <label for="power">Products</label>\n                <select class="form-control" id="power" required>\n                    <option value="auto">Auto</option>\n                    <option value="business">Business</option>\n                    <option value="property">Property</option>\n                    <option value="homeowners"> - Homeowners</option>\n                    <option value="condo"> - Condo</option>\n                    <option value="renters"> - Renters</option>\n                    <option value="life">Life</option>\n                    <option value="powersports">Powersports</option>\n                    <option value="motorcycle"> - Motorcycle</option>\n                    <option value="rv"> - RV</option>\n                    <option value="personalWatercraft"> - Personal Watercraft</option>\n                    <option value="boat"> - Boat</option>\n                    <option value="scooter"> - Scooter</option>\n                    <option value="segway"> - Segway</option>\n                    <option value="atv"> - ATV</option>\n                    <option value="snowmobile"> - Snowmobile</option>\n                </select>\n            </div>\n            <div class="form-group">\n                <label for="name">Start</label>\n                <input type="text" class="form-control" id="name" required>\n            </div>\n            <div class="form-group">\n                <label for="alterEgo">End</label>\n                <input type="text" class="form-control" id="alterEgo">\n            </div>\n            <div class="form-group">\n                <label></label>\n                <button type="submit" class="btn btn-default flexGrow">Submit</button>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class="sideNav navBar flex">\n    <a href="/#/">Save</a>\n    <a href="/#/">Cancel</a>\n</div>\n');
$templateCache.put('shared/directives/nw-select/nwSelect.template.html','<div class="nw-select">\n\t<span class="nw-select__value" ng-bind="model"></span>\n\t<select name="" ng-model="model" ng-transclude>\n\t\n\t</select>\n</div>');}]);