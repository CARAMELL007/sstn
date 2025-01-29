<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ClearLog extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'log:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear log files in storage/logs';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $logPath = storage_path('logs');

        foreach (glob($logPath . '/*.log') as $file) {
            unlink($file);
        }

        $this->info('Log files have been cleared!');
        return Command::SUCCESS;
    }
}
