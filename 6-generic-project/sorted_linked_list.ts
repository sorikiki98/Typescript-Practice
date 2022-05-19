{
	interface SortedList<T> {
		readonly size: number;
		isEmpty(): boolean;
		add(item: T): ResultState<T>;
		remove(index: number): ResultState<T>;
		removeAll(): void;
		get(index: number): ResultState<T>;
		find(item: T): ResultState<T>;
	}

	interface Comparable<T> {
		compareTo(obj: T): number;
	}

	type SuccessState<T> = {
		state: 'success';
		result: string;
		element?: T;
		index?: number;
	};

	type FailureReason = 'index out of range' | 'empty list' | 'invalid value';

	type FailureState = {
		state: 'fail';
		reason: FailureReason;
	};

	type ResultState<T> = SuccessState<T> | FailureState;

	type Node<T> = {
		readonly item: T;
		next?: Node<T>;
	};

	class SortedListImpl<T> implements SortedList<T> {
		private head?: Node<T>;

		private get result(): string {
			let curr: Node<T> | undefined = this.head;
			let result = '';
			while (curr != undefined) {
				result += curr.item + ' ';
				curr = curr.next;
			}
			return result;
		}

		private get RESULT_STRING(): SuccessState<T> {
			return {
				state: 'success',
				result: this.result,
			};
		}

		private readonly INDEX_OUT_OF_RANGE: FailureState = {
			state: 'fail',
			reason: 'index out of range',
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
			let curr = this.head;
			let count = 0;
			while (curr != undefined) {
				curr = curr.next;
				count += 1;
			}
			return count;
		}

		isEmpty(): boolean {
			if (this.size === 0) return true;
			return false;
		}

		add(item: T): ResultState<T> {
			let prev: Node<T> | undefined;
			let curr: Node<T> | undefined = this.head;

			if (curr == undefined) {
				this.head = { item };
			} else {
				while (curr != undefined && this.compareTo(curr.item, item) < 0) {
					prev = curr;
					curr = curr.next;
				}
				if (prev == undefined) {
					const node = { item, next: this.head };
					this.head = node;
				} else {
					const node = { item, next: curr };
					prev.next = node;
				}
			}
			return this.RESULT_STRING;
		}

		remove(index: number): ResultState<T> {
			if (this.size === 0) return this.EMPTY_LIST;
			if (index < 0 || index >= this.size) return this.INDEX_OUT_OF_RANGE;

			let curr = this.head;
			for (let i = 0; i < index - 1; i++) {
				curr = curr?.next;
			}
			curr!.next = curr?.next?.next;
			return this.RESULT_STRING;
		}

		removeAll(): void {
			this.head = undefined;
		}

		get(index: number): ResultState<T> {
			if (this.size === 0) return this.EMPTY_LIST;
			if (index < 0 || index >= this.size) return this.INDEX_OUT_OF_RANGE;

			let curr = this.head;
			for (let i = 0; i < index; i++) {
				curr = curr?.next;
			}
			return {
				...this.RESULT_STRING,
				element: curr?.item,
			};
		}

		find(item: T): ResultState<T> {
			if (this.size === 0) return this.EMPTY_LIST;

			let curr = this.head;
			let count = 0;
			while (curr != undefined) {
				if (curr.item === item) {
					return {
						...this.RESULT_STRING,
						index: count,
					};
				}
				count++;
				curr = curr.next;
			}
			return this.INVALID_VALUE;
		}

		private compareTo<T>(node1: T, node2: T): number {
			if (node1 < node2) return -1;
			else if (node1 == node2) return 0;
			else return 1;
		}
	}

	const list: SortedList<number> = new SortedListImpl<number>();

	const add_result: ResultState<number>[] = [
		list.add(3),
		list.add(4),
		list.add(5),
		list.add(1),
	];
	add_result.forEach((result) => {
		if (result.state === 'success') {
			console.log(result.result);
		} else console.log(result.reason);
	});

	const remove_result = list.remove(1);
	if (remove_result.state === 'success') console.log(remove_result.result);
	else console.log(remove_result.reason);
}
