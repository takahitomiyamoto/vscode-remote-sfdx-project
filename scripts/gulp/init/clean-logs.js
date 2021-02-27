/**
 * @name clean-logs.js
 * @description clean .logs
 */
import { execute } from '../common/lib';

/**
 * @description clean logs
 */
export default function _cleanLogs() {
  const commands = [];
  commands.push('rm -rf .logs/');
  commands.push('rm -rf docs/');
  commands.push('mkdir .logs');
  commands.push('mkdir .logs/apex');
  commands.push('mkdir .logs/apex-class');
  commands.push('mkdir .logs/apex-class/symbol-table');
  commands.push('mkdir .logs/apex-trigger');
  commands.push('mkdir .logs/apex-trigger/symbol-table');
  commands.push('mkdir docs');
  commands.push('mkdir docs/apex-class');
  commands.push('mkdir docs/apex-trigger');

  return execute(commands.join(' && '));
}
