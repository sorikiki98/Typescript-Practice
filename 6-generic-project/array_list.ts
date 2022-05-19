{
	interface List<T> {
		readonly size: number;
		isEmpty(): boolean;
		isFull(): boolean;
		add(item: T, index: number): ResultState<T>;
		remove(index: number): ResultState<T>;
		removeAll(): void;
		get(index: number): ResultState<T>;
		find(item: T): ResultState<T>;
	}

	type SuccessState<T> = {
		state: 'success';
		array: Array<T>;
		element?: T;
		index?: number;
	};

	type FailureReason =
		| 'index out of range'
		| 'already full list'
		| 'empty list'
		| 'invalid value';

	type FailureState = {
		state: 'fail';
		reason: FailureReason;
	};

	type ResultState<T> = SuccessState<T> | FailureState;

	class ListImpl<T> implements List<T> {
		private _size: number = 0;
		private readonly MAX_LENGTH = 5;
		private array: Array<T> = new Array();

		private get RESULT_ARRAY(): SuccessState<T> {
			return {
				state: 'success',
				array: this.array,
			};
		}

		private readonly INDEX_OUT_OF_RANGE: FailureState = {
			state: 'fail',
			reason: 'index out of range',
		};

		private readonly FULL_LIST: FailureState = {
			state: 'fail',
			reason: 'already full list',
		};

		private readonly EMPTY_LIST: FailureState = {
			state: 'fail',
			reason: 'empty list',
		};

		private readonly INVALID_VALUE: FailureState = {
			state: 'fail',
			reason: 'invalid value',
		};

		get size() {
			return this._size;
		}

		isEmpty(): boolean {
			if (this._size === 0) return true;
			else return false;
		}

		isFull(): boolean {
			if (this._size === this.MAX_LENGTH) return true;
			return false;
		}

		add(item: T, index: number): ResultState<T> {
			if (this.isFull()) {
				return this.FULL_LIST;
			}
			if (index < 0 || index > this.size) {
				return this.INDEX_OUT_OF_RANGE;
			}

			for (let j = this.size; j > index; j--) {
				this.array[j] = this.array[j - 1];
			}

			this.array[index] = item;
			this._size++;
			return this.RESULT_ARRAY;
		}

		remove(index: number): ResultState<T> {
			if (this.isEmpty()) {
				return this.EMPTY_LIST;
			}
			if (index < 0 || index >= this.size) {
				return this.INDEX_OUT_OF_RANGE;
			}

			for (let j = index; j < this.size; j++) {
				this.array[j] = this.array[j + 1];
			}
			this._size--;
			return this.RESULT_ARRAY;
		}

		removeAll(): void {
			this.array = new Array();
			this._size = 0;
		}

		get(index: number): ResultState<T> {
			if (this.isEmpty()) {
				return this.EMPTY_LIST;
			}
			if (index < 0 || index >= this.size) {
				return this.INDEX_OUT_OF_RANGE;
			}

			return {
				...this.RESULT_ARRAY,
				element: this.array[index],
			};
		}

		find(item: T): ResultState<T> {
			if (this.isEmpty()) {
				return this.EMPTY_LIST;
			}

			for (let j = 0; j < this._size; j++) {
				if (this.array[j] === item) {
					return {
						...this.RESULT_ARRAY,
						index: j,
					};
				}
			}

			return this.INVALID_VALUE;
		}
	}

	const list: List<string> = new ListImpl<string>();
	type Fruit = [name: string, index: number];

	const fruits: Fruit[] = [['Apple', 0], ['Banana', 1], ['Orange', 2], ['Peach', 1]];
	for (let i=0; i<fruits.length; i++) {
		const [name, index] = fruits[i];
		const result = list.add(name, index);
		if (result.state == "success") {
			console.log(result.array);
		} else {
			console.log(result.reason);
		}
	}

	const result2 = list.remove(4);
	if (result2.state == "success") {
		console.log(result2.array);
	} else {
		console.log(result2.reason);
	}

	const result3 = list.get(3);
	if (result3.state == "success") {
		console.log(result3.element);
	} else {
		console.log(result3.reason);
	}

	const result4 = list.find('Peach');
	if (result4.state == "success") {
		console.log(result4.index);
	} else {
		console.log(result4.reason);
	}
}
