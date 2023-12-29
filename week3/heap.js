class MinHeap {
  constructor() {
    this.heap = [];
  }
  buildHeap(arr) {
    this.heap = arr;
    for (let i = this.parent(arr.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }
  shiftDown(currentIdx) {
    let endIdx = this.heap.length - 1;
    let leftIdx = this.leftChild(currentIdx);

    while (leftIdx <= endIdx) {
      let rightIdx = this.rightChild(currentIdx);
      let idxToShift = leftIdx;

      if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
        idxToShift = rightIdx;
      }

      if (this.heap[currentIdx] > this.heap[idxToShift]) {
        this.swap(currentIdx, idxToShift);
        currentIdx = idxToShift;
        leftIdx = this.leftChild(currentIdx);
      } else {
        return;
      }
    }
  }

  shiftUp(currentIdx) {
    let parentIdx = this.parent(currentIdx);
    while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = this.parent(currentIdx);
    }
  }
  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1);
    this.heap.pop(); 
    this.shiftDown(0);
  }

  insert(value) {
    this.heap.push(value); 
    this.shiftUp(this.heap.length - 1);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }
}

let heap = new MinHeap();
heap.buildHeap([4, 10, 3, 5, 1]);
console.log(heap.heap);
heap.insert(6)
heap.insert(2)
heap.insert(9)
console.log(heap.heap);

console.log("@@@@");
heap.remove()
console.log(heap.heap);
