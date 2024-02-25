import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service'

describe('TestService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('permutations() ', () => {
    expect(service.permutations('a')).toEqual(['a']);
    expect(service.permutations('ab')).toEqual(['ab', 'ba']);
    expect(service.permutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    expect(service.permutations('aabb')).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']))
  });

  it('findTheOddInt()', () => {
    expect(service.findTheOddInt([7])).toBe(7);
    expect(service.findTheOddInt([0])).toBe(0);
    expect(service.findTheOddInt([1,1,2])).toBe(2);
    expect(service.findTheOddInt([0,1,0,1,0])).toBe(0);
    expect(service.findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
  })

  it('countTheSmileyFaces()', () => {
    expect(service.countTheSmileyFaces([])).toBe(0);
    expect(service.countTheSmileyFaces([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(service.countTheSmileyFaces([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(service.countTheSmileyFaces([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  })
});