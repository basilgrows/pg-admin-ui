angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('pages/home/home.template.html','<div class="sideNav navBar flex">\n\t<a>New</a>\n\t<a>Edit</a>\n\t<a>Details</a>\n\t<a>Stop</a>\n\t<a>Delete</a>\n</div>\n\n<div class="scrollContianer paddingSmall flexGrow">\n\t<span class="sectionHeader">Active</span>\n\t<div class="cardContainer flex isRow">\n\t\t<div class="jobCard card flexWidth33">\n\t\t\t<span class="jobType">Prospect Generator</span>\n\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t<span class="itemTag">Ohio</span>\n\t\t\t\t<span class="itemTag">Michigan</span>\n\t\t\t\t<span class="itemTag">North Dakota</span>\n\t\t\t\t<span class="itemTag">South Dakota</span>\n\t\t\t</div>\n\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t<span class="itemTag">Auto</span>\n\t\t\t\t<span class="itemTag">Life</span>\n\t\t\t\t<span class="itemTag">RV</span>\n\t\t\t\t<span class="itemTag">Golf Cart</span>\n\t\t\t</div>\n\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t<span class="date">10-26-2016</span>\n\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t</div>\n\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t<span class="label">End:</span>\n\t\t\t\t<span class="date">10-28-2016</span>\n\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<hr>\n\n\t<span class="sectionHeader">Upcoming</span>\n\t<div class="cardContainer flex isRow">\n\t\t<div class="jobCard card flexWidth33">\n\t\t\t<span class="jobType">Prospect Generator</span>\n\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t<span class="itemTag">Texas</span>\n\t\t\t</div>\n\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t<span class="itemTag">Homeowners</span>\n\t\t\t\t<span class="itemTag">Condo</span>\n\t\t\t</div>\n\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t<span class="date">01-01-2017</span>\n\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t</div>\n\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t<span class="label">End:</span>\n\t\t\t\t<span class="date">01-02-2017</span>\n\t\t\t\t<span class="time">3:00 AM EST</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<hr>\n\n\t<span class="sectionHeader">Ongoing</span>\n\t<div class="cardContainer flex isRow">\n\t\t<div class="jobCard card flexWidth33">\n\t\t\t<span class="jobType">Prospect Generator</span>\n\t\t\t<div class="locationList flex isRow alignCenter">\n\t\t\t\t<span class="itemTag">Michigan</span>\n\t\t\t</div>\n\t\t\t<div class="productList flex isRow alignCenter">\n\t\t\t\t<span class="itemTag">Auto</span>\n\t\t\t</div>\n\t\t\t<div class="startDate flex isRow alignCenter">\n\t\t\t\t<span class="label">Start:</span>\n\t\t\t\t<span class="date">04-27-2012</span>\n\t\t\t\t<span class="time">11:00 PM EST</span>\n\t\t\t</div>\n\t\t\t<div class="endDate flex isRow alignCenter">\n\t\t\t\t<span class="label">End:</span>\n\t\t\t\t<span class="date">N/A</span>\n\t\t\t\t<span class="time">N/A</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\t<a ui-sref="other({id: 2})">Other Page</a>\n');
$templateCache.put('pages/other/other.template.html','<h2>Hello Other Page ID: {{id}}</h2>\n\n<h3>Food from first page: {{store.food}}</h3>');
$templateCache.put('shared/directives/nw-select/nwSelect.template.html','<div class="nw-select">\n\t<span class="nw-select__value" ng-bind="model"></span>\n\t<select name="" ng-model="model" ng-transclude>\n\t\n\t</select>\n</div>');}]);