{
	// 참고(유틸리티 타입): https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
	type Video = {
		title: string;
		author: string;
	};
	// [1, 2].map(item => item * item); // [1, 4]

	type Optional<T> = {
		[P in keyof T]?: T[P]; // for...in
	};

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};
	type VideoOptional = Optional<Video>;

	type Animal = {
		name: string;
		age: number;
	};
	const animal: Optional<Animal> = {
		name: 'dog',
	};
	animal.name = 'ellie';

	const video: ReadOnly<Video> = {
		title: 'hi',
		author: 'ellie',
	};

	// type VideoOptional = {
	//   title?: string;
	//   author?: string;
	// };

	// type VideoReadOnly = {
	//   readonly title: string;
	//   readonly author: string;
	// };

	type Nullable<T> = { [P in keyof T]: T[P] | null };
	const obj2: Nullable<Video> = {
		title: 'hi',
		author: null,
	};

	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};

	type Person = {
		name: string;
		age: number;
	};

	const person: Proxify<Person> = {
		name: {
			get(): string {
				return this.name;
			},

			set(value: string): void {
				this.name = value;
			},
		},
		age: {
			get(): number {
				return this.age;
			},
			set(value: number): void {
				this.age = value;
			},
		},
	};
}
