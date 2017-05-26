## Blob Boundary

I provided three solutions to find the top, bottom, left, and right boundaries. Each solution tracks the number of cells read. They also contain a store of all cells visited to ensure no cell is read twice. I am aware there is no practical optimization with the store, but am simply minimizing the number of matrix cells visited as the instructions suggest. All code is in javascript.


The constructors take an argument of an array of 10 arrays. Each of the 10 arrays has length 10. I assume all data is valid and do not include validations or ways to handle error messages.


Run solution 1 with node solution1Runner.js

Run solution 2 with node solution2Runner.js

Run solution 3 with node solution3Runner.js


#### Solution 1 and 2:
Solutions one and two make no assumptions about the shape of the blob. Instead, they individually seek out the upper boundary, left boundary, right boundary, and lower boundary. The only difference is that solution one traverses the column outside the current boundary, while solution two traverses the current boundary, only checking outside the boundary when the current boundary is filled. Solution two relies on the 'savings' in the store - this is necessary given by definition if the boundary is a certain column some of those cells have already been visited and to double count all of them would be inefficient.


#### Solution 3:
Solution three is the optimal solution given an understanding of the typical shape of a blob. This solution traverses the outside of the blob accounting for its circular nature. The assumption is that a blob would not have any filled cell where the only connection to the rest of the blob is the cell it came from. Said another way, there would be no lone cell jutting out from the rest of the blob.  If that is not a reasonable assumption I would use solution one or two instead. Matrix2 on the Solution3Runner.js page is an example of where this algorithm would not work. The reason why is that once we have visited a cell we do not want to visit it again, and if there is a jut we would have to allow for re-visiting the same cell thus making the algorithm less efficient.

This solution has one search function that redirects to different methods to determine which cell to visit next. This is based on previous direction which the search function takes as an argument. We start at the top of the blob and generally travel down and left first. Once we are starting to go right we hit the bottom of the circle and eventually move in the direction of up and right. I incorporate a test of whether we are in between the two side bounds in this solution so we know we have visited the edges of the circle and are now generally heading up. This part is unecessary since we found the upper bound first.  The goal is to always hit the boundaries, and thus I am ordering the steps in each method with that in mind. Based on the example matrix, cell count would be 46. 

I note that if the goal was to optimize this specific example matrix solution I could change the order of one function, and have the next search be right if previous direction is right, which would result in a cell count of 31. However, I did not write the solution with this specific example in mind. If I make that change I would be simultaneously allowing for many false positives where the bottom boundary would be inaccurate. 

This could always be futher optimized by adding more conditionals. For example, when previous direction is right we could check if above the lower boundary. If so that means we have started to move up and thus could check up and right before down. Ultimately, I decided adding too many of these conditionals would harm elegance and clarity and thus would not be worth the incremental gains. 


#### Time Spent
I spent ~4 hours on this total including brainstorming, starting with simple iteration, and then optimizing and writing the README. If I was to spend more time I would have created simple unit tests.
