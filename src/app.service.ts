import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  permutations(str: string): string[] {
    if (str.length === 0) {
      return [''];
    }

    const result = [];
    for (let i = 0; i < str.length; i++) {
      const current = str[i];
      const remaining = str.slice(0, i) + str.slice(i + 1);
      const perms = this.permutations(remaining);
      for (const perm of perms) {
        result.push(current + perm);
      }
    }
    return result;
  }

  findTheOddInt(seq: number[]): number {
    const count = {};
    for (const num of seq) {
      count[num] = count[num] ? count[num] + 1 : 1;
    }

    for (const num in count) {
      if (count[num] % 2 !== 0) {
        return +num;
      }
    }
  }

  countTheSmileyFaces(arr: string[]): number {
    return arr.filter(face => /[:;][-~]?[)D]/.test(face)).length;
  }
}
