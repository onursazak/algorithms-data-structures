/*
https://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html


data = [
    {keys: [], values: []} -> Dictionary,
]

Each index in the array is called a bucket(or entry, or slot) and stores any number of key-value pairs.

They key of a key-value pair decides what bucket it should be stored in.
First, the key is converted to a number using a hash function:
    var hash = hash("PI") // -> 127,872

Sometimes the hash function will return the same hash for the same key – that’s called a collision.


*/

class NaiveDict {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  setItem(key, value) {
    this.keys.push(key);
    this.values.push(value);
  }

  getItem(lookupKey) {
    for (let i = 0; i < this.keys.length; i++) {
      let key = this.keys[i];
      if (key == lookupKey) {
        return this.values[i];
      }
    }
  }
}

class HashTable {
  bucketCount = 100000;
  buckets = [];

  constructor() {
    for (let i = 0; i < this.bucketCount; i++) {
      this.buckets.push(new NaiveDict());
    }
  }

  // very simple implementation that takes the sum of the ASCII
  // codes of the characters in the key.
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  /*
    We want to use the hash as an index in our array of buckets. But what if we only have 1000 buckets, and the hash value exceeds the array size?

    To solve that problem we use the modulo operator to get an index that’s smaller than our array size.

    To determine the correct bucket given a certain key we use the modulo operator on the hash of the key, then retrieve the bucket at the index we just calculated.
*/
  getBucketIndex(key) {
    return this.hash(key) % this.bucketCount;
  }

  getBucket(key) {
    return this.buckets[this.getBucketIndex(key)];
  }

  setItem(key, value) {
    this.getBucket(key).setItem(key, value);
  }

  getItem(lookupKey) {
    return this.getBucket(lookupKey).getItem(lookupKey);
  }
}

const dict = new HashTable();

dict.setItem("name", "Onur");
console.log(dict.getItem("name"));
