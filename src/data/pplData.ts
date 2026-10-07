import type { PPLModule } from '../types/ppl';
import { module010 } from './modules/module010';
import { module020 } from './modules/module020';
import { module030 } from './modules/module030';
import { module040 } from './modules/module040';
import { module050 } from './modules/module050';
import { module060 } from './modules/module060';
import { module070 } from './modules/module070';
import { module080 } from './modules/module080';
import { module090 } from './modules/module090';

export const PPL_MODULES: PPLModule[] = [
  module010,
  module020,
  module030,
  module040,
  module050,
  module060,
  module070,
  module080,
  module090,
];

export const ALL_QUESTIONS = PPL_MODULES.flatMap((m) => m.questions);
export const ALL_SUMMARY_CARDS = PPL_MODULES.flatMap((m) => m.summaryCards);
export const ALL_CHAPTERS = PPL_MODULES.flatMap((m) => m.chapters);

export function getModuleById(id: string): PPLModule | undefined {
  return PPL_MODULES.find((m) => m.id === id);
}
