class RiverGraph {
    checkRiverSize(matrix) {
        let visited = new Array(matrix.length);
        let sizes = [];

        for (let i = 0; i < matrix.length; i++) {
            visited[i] = new Array(matrix[0].length).fill(false);
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (!visited[i][j]) {
                    let size = this.traverseThroughRiver(i, j, matrix, visited);
                    if (size > 0) {
                        sizes.push(size);
                    }
                }
            }
        }

        return sizes;
    }

    traverseThroughRiver(i, j, matrix, visited) {
        let currentRiversize = 0;
        let nodesToExplore = [];
        nodesToExplore.push([i, j]);
        while (nodesToExplore.length > 0) {
            let currentNode = nodesToExplore.pop();
            let x = currentNode[0];
            let y = currentNode[1];

            if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || visited[x][y]) {
                continue;
            }

            visited[x][y] = true;
            currentRiversize++;

            nodesToExplore.push([x - 1, y]);
            nodesToExplore.push([x + 1, y]);
            nodesToExplore.push([x, y - 1]);
            nodesToExplore.push([x, y + 1]);
        }

        return currentRiversize;
    }
}
