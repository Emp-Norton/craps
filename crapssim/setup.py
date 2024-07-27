import crapssim as craps
import matplotlib.pyplot as plt
import numpy as np
import graphviz as gv
from typing import List

def setup_strat(strat=None):
    bet = strat if strat is not None else craps.strategy.passline
    player = craps.Player(bankroll=1000, bet_strategy=bet)
    table = craps.Table()
    table.add_player(player)

    return table



IntArray = List[int]
StrArray = List[str]

class StratGrapher:
    def __init__(self, strats: StrArray = None) -> None:
        self.strats = strats
        self.bankroll_updates = []
        self.dice_rolls = []

    def compare_strats(self, strats: StrArray = None, bankroll: int = bankroll, table: Table = None) -> None:
        for strat in strats:
            player = Player(betting_strategy=strat, bankroll=bankroll)
            table.add_player(player)

    def graph_bankroll(self, bankroll_values: IntArray = None, strats: StrArray = None, rolls: IntArray = None) -> None:
        bankroll = bankroll_values if bankroll_values is not None else self.bankroll_updates
        x=(rolls)
        y=(bankroll)
        plt.plot(x, y, marker='o', linestyle='-')
        plt.xlabel("# of rolls")  # add X-axis label
        plt.ylabel("Total bankroll")  # add Y-axis label
        plt.title("Craps simulation")  # add title
        plt.show()

    def throw(self, table, max_rolls):
        for i in range(max_rolls):
            table.run(max_rolls=1)
            self.bankroll_updates.append(table.return_results())
            self.dice_rolls.append(i)

    def show_bankroll(self):
        print(f"Player has: ${self.bankroll_updates} updates.")






t = setup_strat()
sg = StratGrapher(strat='Passline')
sg.throw(t, 15)
