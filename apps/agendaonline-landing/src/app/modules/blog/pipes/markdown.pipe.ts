import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({ name: 'markdown', standalone: true })
export class MarkdownPipe implements PipeTransform {
  transform(value: string) {
    if (value === null || value === undefined) return '';

    return marked.parse(value, { async: false });
  }
}
