<?php

namespace Drupal\carbrand_core\Controller;

use Drupal\Core\Controller\ControllerBase;

class RevenueTableController extends ControllerBase {

  /**
   * Builds the Status Checks table.
   *
   * @return array
   */
  public function RevenueTableBuild(): array {
    $table_headers = [
      'Project Name',
      'In Progress',
      'Awaiting Client Review',
      'escalated',
      'Test team',
      'Triage',
      'Code Review',
    ];

    return [
      '#table_headers' => $table_headers,
//      '#table_data' => $table_data,
      '#theme' => 'revenue_table_template',
    ];
  }
}
