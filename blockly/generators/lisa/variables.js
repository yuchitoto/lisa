/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */

'use strict';

/*goog.provide('Blockly.lisa.variables');
goog.require('Blockly.lisa');*/

Blockly.lisa['variable'] = function(block) {
    var dropdown_variabletype = block.getFieldValue('variableType');
    var text_varname = block.getFieldValue('varName');
    var value_initvalue = Blockly.lisa.valueToCode(block, 'initValue', Blockly.lisa.ORDER_ATOMIC);
    // TODO: Assemble lisa into code variable.
    var code = '\t' + dropdown_variabletype + ' ' +text_varname + '=0;\n';
    return code;
};

/**
 * parameter block
 *
 * @param block
 * @returns {string}
 */
Blockly.lisa['parameter'] = function(block) {
  var text_parameter_name = block.getFieldValue('parameter-name');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name+' '+text_parameter_name;
  return code;
};

/**
 * method block
 *
 * @method block
 * @returns {string}
 */

Blockly.lisa['method'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var text_methoda = block.getFieldValue('MethodA');
  var statements_name = Blockly.lisa.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+dropdown_name+' '+ text_methoda + ' (' +statements_name + ' ){}\n';
  return code;
};

/**
 * constructor block
 *
 * @constructor block
 * @returns {string}
 */
Blockly.lisa['constructor'] = function(block) {
  var text_constructor_name = block.getFieldValue('constructor-name');
  var statements_name = Blockly.lisa.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
   var code = 'void'+' '+text_constructor_name + ' (' +statements_name + ' ){}\n';
  return code;
};