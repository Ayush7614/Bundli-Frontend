var SimpleFormApp = angular.module('simpleFormApp', ['ngSanitize']);

SimpleFormApp.controller('simpleFormCtrl', function($scope) {

    $scope.formValid = 'dunno';
    $scope.activeStep = 1;
    
    // forms are built dynamcially based on this array of form steps
    $scope.steps = [
        { 
            tab: { number: 1, text: 'First Step' }, 
            fields: [
                { type: 'text', name: 'firstName', label: 'First Name', value: '', required: true, minlength: 1, maxlength: 50 },
                { type: 'text', name: 'lastName', label: 'Last Name', value: '', required: true, minlength: 1, maxlength: 50 },
                { type: 'text', name: 'nickname', label: 'Nickname', value: '' },
                { type: 'date', name: 'startDate', label: 'Start Date', value: new Date(), min: new Date(2015, 0, 1), max: new Date(2015, 11, 31), required: true }
            ]
        },
        { 
            tab: { number: 2, text: 'Second Step' }, 
            fields: [
                { type: 'text', name: 'favoriteFood', label: 'Favorite Food', value: '', required: true },
                { type: 'text', name: 'favoriteDrink', label: 'Favorite Drink', value: '', required: true },
                { type: 'date', name: 'favoriteDay', label: 'Favorite Day', value: new Date(2015, 0, 1), required: true }
            ]
        },
        { 
            tab: { number: 3, text: 'Third Step' }, 
            fields: [
                { type: 'date', name: 'dateOne', label: 'Date One', value: new Date(2015, 0, 1), required: true },
                { type: 'date', name: 'dateTwo', label: 'Date Two', value: new Date(2015, 0, 1) },
                { type: 'textarea', name: 'description', label: 'Description', value: '', required: true }
            ]
        },
        { 
            tab: { number: 4, text: 'Fourth Step' }, 
            fields: [
                { type: 'number', name: 'powerLevel', label: 'Power Level', value: '', required: true, min: 1, max: 9000 },
                { type: 'number', name: 'charLevel', label: 'Character Level', value: 1, required: true, min: 1, max: 99 },
                { type: 'text', name: 'skillLevel', label: 'Skill Level', value: 1000 },
            ]
        }
    ];
    
    $scope.goToStep = function(step) {
        $scope.activeStep = step.tab.number;
    };
    
    $scope.trySubmit = function() {
        var i, index, fieldList, field, formValid = true;
        
        // assume the form is valid and hunt for invalid fields
        
        // for each form step...
        for(i = 0; i < $scope.steps.length; i++) {
            fieldList = $scope.steps[i].fields;
            // for each field in that step...
            for(index in fieldList) {
                field = fieldList[index];
                // if the field is invalid, the form is invalid
                if ($scope.myForm[field.name].$invalid) {
                    formValid = false;
                    break;
                }
            }
            if (!formValid) break;
        }
        
        // for demo display
        $scope.formValid = formValid;
        setTimeout($scope.reset, 2000);
    };
    
    $scope.validFormSteps = function() {
        var i, fieldList, index, field, stepValid;
        
        // the goal here is to determine if all fields within a given step
        // are valid, and mark the step itself as valid or invalid accordingly
        for(i = 0; i < $scope.steps.length; i++) {
            // assume the step is valid until an invalid field is found
            stepValid = true;
            fieldList = $scope.steps[i].fields;
            for(index in fieldList) {
                field = fieldList[index];
                // we can ignore fields that aren't flags as required
                if (typeof field.required === "undefined" || field.required === false) continue;
                // use angular's validation flags to easily determine if the field is valid
                if ($scope.myForm[field.name].$invalid) stepValid = false;
            }
            // set the step's valid flag
            $scope.steps[i].valid = stepValid;
        }
    };
    
    $scope.reset = function() {
        $scope.formValid = 'dunno';
        $scope.$apply();
    };
    
    // I want validation visuals to show up as soon as an input receives focus
    $scope.$on('input-focus', function(eventName, input) {
        $scope.myForm[input.name].$pristine = false;
    });
    
    // I want form step validation to be performed any time an input looses focus
    $scope.$on('input-blur', $scope.validFormSteps);
    
});

SimpleFormApp.directive('simpleForm', function($timeout) {
    return {
        restrict: 'E',
        template: [
            '<div class="simple-form" ng-form name="myForm" ng-submit="trySubmit()">',
                '<div class="form-step-headers">',
                    '<div class="step-header" ng-repeat="step in steps" ng-class="{active: step.tab.number === activeStep, valid: step.valid}" ng-click="goToStep(step)">',
                        '<div class="step-status" ng-show="step.valid === true"><i class="fa fa-check"></i></div>',
                        '<div class="step-number">{{step.tab.number}}</div>',
                        '<div class="step-name">{{step.tab.text}}</div>',
                    '</div>',
                '</div>',
                '<div class="form-step" ng-repeat="step in steps" ng-show="activeStep === step.tab.number">',
                    '<div class="form-step-banner">{{step.tab.text}}</div>',
                    '<div class="form-fields">',
                        '<div class="form-field" ng-repeat="field in step.fields">',
                            '<input-label field="field"></input-label>',
                            '<div class="form-input-container" ng-switch="field.type">',
                                '<div ng-switch-when="text" text-input input="field"></div>',
                                '<div ng-switch-when="date" date-input input="field"></div>',
                                '<div ng-switch-when="number" number-input input="field"></div>',
                                '<div ng-switch-when="textarea" textarea-input input="field"></div>',
                                '<validation-message input="field"></validation-message>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
            
                '<div class="form-submitter">',
                    '<div class="submit-status">',
                        '<span class="success" ng-show="formValid === true">Form valid</span>',
                        '<span class="error" ng-show="formValid === false">Form Invalid</span>',
                    '</div>',
                    '<input type="submit" class="submit-btn" ng-click="trySubmit()" />',
                '</div>',
            
            '</div>'
        ].join('')
    };
});

SimpleFormApp.directive('inputLabel', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: { field: '=' },
        template: '<div class="input-label">{{ field.label }}<span class="optional" ng-if="!field.required">(optional)</span></div>'
    };
});

SimpleFormApp.controller('inputCtrl', function($scope) {
    $scope.onFocus = function(input) {
        $scope.$emit('input-focus', input);
    };
    $scope.onBlur = function(input) {
        $scope.$emit('input-blur', input);
    };
});

SimpleFormApp.controller('inputSelectCtrl', function($scope) {
    $scope.onFocus = function(input) {
        $scope.$emit('input-focus', input);
    };
    $scope.onBlur = function(input) {
        $scope.$emit('input-blur', input);
    };
    
    $scope.filterValueChanged = function(input, item) {
        if (!item) {
            $scope.filterValues[input.text.toLowerCase()] = '';
            return;
        }
        $scope.filterValues[input.text.toLowerCase()] = item.id.toString();
    };
});

SimpleFormApp.directive('textInput', function() {
    return {
        restrict: 'A',
        replace: true,
        controller: 'inputCtrl',
        scope: { input: '=' },
        template: '<input type="text" ng-model="input.value" name="{{input.name}}" ng-required="input.required" ng-minlength="input.minlength" ng-maxlength="input.maxlength" ng-focus="onFocus(input)" ng-blur="onBlur(input)">',
        link: function(scope, element, attrs) {
            if (typeof scope.input.minlength === "undefined") scope.input.minlength = 1;
            if (typeof scope.input.maxlength === "undefined") scope.input.maxlength = 128;
        }
    };
});

SimpleFormApp.directive('numberInput', function() {
    return {
        restrict: 'A',
        replace: true,
        controller: 'inputCtrl',
        scope: { input: '=' },
        template: '<input type="number" ng-model="input.value" name="{{input.name}}" min="{{input.min}}" max="{{input.max}}" ng-required="input.required"  ng-focus="onFocus(input)" ng-blur="onBlur(input)"/>',
        link: function(scope, element, attrs) {
            if (typeof scope.input.min === "undefined") scope.input.min = -999999999999;
            if (typeof scope.input.max === "undefined") scope.input.max = 999999999999;
        }
    };
});

SimpleFormApp.directive('dateInput', function() {
    return {
        restrict: 'A',
        replace: true,
        controller: 'inputCtrl',
        scope: { input: '=' },
        template: '<input type="date" ng-model="input.value" name="{{input.name}}" min="{{input.min | date: \'yyyy-MM-dd\'}}" max="{{input.max | date: \'yyyy-MM-dd\'}}" ng-required="input.required" ng-focus="onFocus(input)" ng-blur="onBlur(input)">',
        link: function(scope, element, attrs) {
            
        }
    };
});

SimpleFormApp.directive('textareaInput', function() {
    return {
        restrict: 'A',
        replace: true,
        controller: 'inputCtrl',
        scope: { input: '=' },
        template: '<textarea ng-model="input.value" name="{{input.name}}" ng-required="input.required" ng-focus="onFocus(input)" ng-blur="onBlur(input)"></textarea>'
    };
});

SimpleFormApp.directive('selectInput', function() {
    return {
        restrict: 'A',
        replace: true,
        controller: 'selectInputCtrl',
        scope: { input: '=' },
        template: [
            '<ui-select ng-model="input.selectedValue" theme="bootstrap" on-select="filterValueChanged(filterItem, $model)">',
                '<ui-select-match placeholder="Select...">{{ $select.selected.text }}</ui-select-match>',
                '<ui-select-choices repeat="item in input.list | filter: $select.search">',
                    '<div ng-bind-html="item.text"></div>',
                '</ui-select-choices>',
            '</ui-select>'
        ].join('')
    }
})

SimpleFormApp.directive('validationMessage', function() {
    return {
        restrict: 'E', 
        replace: true,
        require: '^form',
        scope: { input: '=' },
        template: ['<div class="validation">',
                        // Invalid Messages
                        '<div class="error" ng-if="input.required === true" ng-show="myForm[\'{{input.name}}\'].$error.required && myForm[\'{{input.name}}\'].$pristine === false">',
                            '<div class="validation-message hint--left hint--error" data-hint="Required"><i class="fa fa-asterisk"></i></div>',
                        '</div>',
                        '<div class="error" ng-if="input.type === \'date\'" ng-show="myForm[\'{{input.name}}\'].$error.date">',
                            '<div class="validation-message hint--left hint--error" data-hint="Invalid date"><i class="fa fa-times"></i></div>',
                        '</div>',
                        '<div class="error" ng-if="input.minlength !== undefined" ng-show="myForm[\'{{input.name}}\'].$error.minlength">',
                            '<div class="validation-message hint--left hint--error" data-hint="Value too short"><i class="fa fa-times"></i></div>',
                        '</div>',
                        '<div class="error" ng-if="input.maxlength !== undefined" ng-show="myForm[\'{{input.name}}\'].$error.maxlength">',
                            '<div class="validation-message hint--left hint--error" data-hint="Value too long"><i class="fa fa-times"></i></div>',
                        '</div>',
                        '<div class="error" ng-if="input.min !== undefined" ng-show="myForm[\'{{input.name}}\'].$error.min">',
                            '<div class="validation-message hint--left hint--error" data-hint="Value too low"><i class="fa fa-times"></i></div>',
                        '</div>',
                        '<div class="error" ng-if="input.max !== undefined" ng-show="myForm[\'{{input.name}}\'].$error.max">',
                            '<div class="validation-message hint--left hint--error" data-hint="Value too high"><i class="fa fa-times"></i></div>',
                        '</div>',
                   
                        // Valid Messages
                        '<div class="success" ng-if="input.required === true && input.type !== \'date\'" ng-show="myForm[\'{{input.name}}\'].$pristine === false && myForm[\'{{input.name}}\'].$valid === true">',
                            '<div class="validation-message"><i class="fa fa-check"></i></div>',
                        '</div>',
                        '<div class="success" ng-if="input.type === \'date\' && input.required === true" ng-show="myForm[\'{{input.name}}\'].$pristine === false && !myForm[\'{{input.name}}\'].$error.date">',
                            '<div class="validation-message"><i class="fa fa-check"></i></div>',
                        '</div>',
                   
                    '</div>'].join(''),
        link: function(scope, element, attrs, formCtrl) {
            scope.myForm = formCtrl;
        }
    };
});