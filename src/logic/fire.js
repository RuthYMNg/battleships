const fire = function (player, grid, x, y) {
    if (
        !player ||
        !grid ||
        !grid.length ||
        grid.some(row => row.length < x) ||
        grid.length < y
    ) {
        return null;
    }
    grid[y][x].isDiscovered = true;
    return {
        player: player,
        grid: grid
    }
}

module.exports = fire;