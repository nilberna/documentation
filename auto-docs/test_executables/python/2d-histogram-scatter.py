import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

import numpy as np


x0 = np.random.randn(100)/5. + 0.5  # 5. enforces float division
y0 = np.random.randn(100)/5. + 0.5
x1 = np.random.rand(50)
y1 = np.random.rand(50) + 1.0


x = np.concatenate([x0, x1])
y = np.concatenate([y0, y1])
trace1 = Scatter(
    x=x0,
    y=y0,
    mode='markers',
    marker=Marker(
        symbol='circle',
        opacity=0.7
    )
)
trace2 = Scatter(
    x=x1,
    y=y1,
    mode='markers',
    marker=Marker(
        symbol='square',
        opacity=0.7
    )
)
trace3 = Histogram2d(
    x=x,
    y=y
)
data = Data([trace1, trace2, trace3])

if 'fig' not in locals():
    if 'data' not in locals():
        raise Exception('no data OR figure!!')
    fig = dict(data=data)  # assumes fig or data
if 'layout' not in fig:
    fig['layout'] = dict()
if 'margin' not in fig['layout']:
    fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
fig['layout'].update(autosize=False, width=500, height=500)


plot_url = py.plot(data, filename='2d-histogram-scatter', auto_open=False)