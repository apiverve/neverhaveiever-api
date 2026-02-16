from setuptools import setup, find_packages

setup(
    name='apiverve_neverhaveiever',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Never Have I Ever generates random statements for the popular party game. Features 330+ unique prompts with per-API-key tracking to avoid repeats.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/neverhaveiever?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
