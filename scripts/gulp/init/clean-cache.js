/**
 * @name clean-cache.js
 * @description clean cache
 */
import { execute } from '../common/lib';

/**
 * @description clean npm cache
 */
export default function _cleanCache() {
  const commands = [];
  commands.push('rm -rf node_modules/');
  commands.push('echo y | rm yarn.lock');
  commands.push('yarn cache clean');

  return execute(commands.join(' && '));
}
